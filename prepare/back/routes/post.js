const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // 파일 시스템 조작하는 모듈

const { Post, Image, Comment, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");
const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다");
  fs.mkdirSync("uploads");
}

/*multer 이미지 저장 할때 쓰는 라이브러리 app.use로 추가해 줘도 되지만 어떤건 이미지가 안들어가고
 어떤건 여러 이미지가 들어가고 설정이 다 달라서 쓰는것만 따로 이런 설정을 해서 쓴다*/ const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      // 제로초.png
      // 파일 이름 중복 방지
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 제로초
      done(null, basename + "_" + new Date().getTime() + ext); // 제로초15184712891.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB 파일 용량 설정
});
// 보통 이미지나 동영상 처리는 서버에서 처리 하면 부담이 많이 가 cpu나 메모리를 많이 잡아먹어서
// front에서 클라우드로 바로 올리는 방법으로 하는게 좋다
// upload.single  upload.none  upload.fills

router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  //res.json({ id: 1, content: "hello" });
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      // router 접근하기 전에 deserializeUser가 실행되서 저장해 놨던 req.user.id값이 가져와진다
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({ where: { name: tag.slice(1).toLowerCase() } })));
      // findOrCreate 를 하면 [[노드, true], [리액트, true]] 이런식으로 result 결과값이 나온다
      // findOrCreate 하는 이유는 #노드, #노드 이런식으로 중복해서 들어오거나
      // 이미 다른 사람이 해쉬태그를 등록한 경우 같은 해쉬태그를 등록하지 않기 위해 쓴다
      await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) {
      // 이미지 여러개 올리면 image: [1.png, 2.jpg]
      if (Array.isArray(req.body.image)) {
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else {
        // 이미지 하나만 올리면 image: 1.png
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른사람
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /post/images
router.post("/images", isLoggedIn, upload.array("image"), (req, res, next) => {
  // isLoggedIn 처리 후 upload.array("image")에서 이미지 업로드 후 처리가 되서 async로 동기 처리할 필요가 없다
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

// POST  /post/1/comment  :postId 동적으로 받는 파라미터 req.params로 받을수 있음
router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  //res.json({ id: 1, content: "hello" });
  try {
    // 존재하지 않는 게시글에 댓글작성 막기
    // 여기에 delete같은거 날아오면 일이 날수 있기에 막아둠
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글 입니다.");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//PATCH /post/1/like
router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    // 여기선 sequlize가 쉽게 쓸수있게 관계를 쓸때 이렇게 쓸수 있지만
    // SQL쓸때는 SQL을 날리고 응답을 하는 방식으로 구현한다
    await post.addLikers(req.user.id);
    res.status(201).json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//DELETE /post/1/like
router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.removeLikers(req.user.id);
    res.status(201).json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /post/1/
router.get("/:postId", async (req, res, next) => {
  //res.json({ id: 1, content: "hello" });
  try {
    // 존재하지 않는 게시글에 댓글작성 막기
    // 여기에 delete같은거 날아오면 일이 날수 있기에 막아둠
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(404).send("존재하지 않는 게시글 입니다.");
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
      ],
    });
    console.log("잘보내는중");
    res.status(200).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /post/1
router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST  /post/1/comment  :postId 동적으로 받는 파라미터 req.params로 받을수 있음
router.post("/:postId/retweet", isLoggedIn, async (req, res, next) => {
  //res.json({ id: 1, content: "hello" });
  try {
    // 존재하지 않는 게시글에 댓글작성 막기
    // 여기에 delete같은거 날아오면 일이 날수 있기에 막아둠
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Retweet",
        },
      ],
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글 입니다.");
    }
    // 자기게시글과 남이 자기게시글 리트윗 한거를 리트윗하는걸 막는 코드
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send("자신의 글은 리트윗 할 수 없습니다.");
    }
    // 남의 게시글을 남이 리트윗 한거를 자기가 다시 리트윗 할 수 있다는 코드
    const retweetTargetId = post.RetweetId || post.id;
    // 이미 리트윗한걸 찾는 코드
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send("이미 리트윗했습니다.");
    }
    // 이렇게 하면 내가 어떤 게시글을 리트윗 했는지가 안나온다
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: "retweet",
    });
    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
