const express = require("express");
const { Post, Image, Comment, User } = require("../models");
const { isLoggedIn } = require("./middlewares");
const router = express.Router();

router.post("/", isLoggedIn, async (req, res, next) => {
  //res.json({ id: 1, content: "hello" });
  try {
    const post = await Post.create({
      content: req.body.content,
      // router 접근하기 전에 deserializeUser가 실행되서 저장해 놨던 req.user.id값이 가져와진다
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
        },
        {
          model: User,
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
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
      PostId: req.params.postId,
      UserId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/", (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;
