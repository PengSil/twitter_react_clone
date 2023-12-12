const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Op } = require("sequelize");
const { User, Post, Image, Comment } = require("../models");
// db.User
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

// router.post('/login',(req, res, next) => {})
// (req, res, next) 다 미들웨어임

//GET /user
router.get("/", async (req, res, next) => {
  //console.log(req.headers);
  try {
    if (req.user) {
      // const user = await User.findOne({
      //   where: { id: req.user.id },
      // });
      // res.status(200).json(user);
      const fullUserWithoutPassword = await User.findOne({
        // 여기서 가져오는건 models에 있는 db.User.hasMany(db.Post); 같은거 에서 가져온다
        // 근데 hasMany라서 model: Post가 복수형이 되서 me.Posts가 된다
        // sequelize 가 다른테이블 들의 관계를 합쳐서 보내준다
        where: { id: req.user.id },
        // attributes: ["id", "nickname", "email"], attributes를 쓰면 특정 데이터를 가져오거나 제외하거나 할수있다
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            // post의 length만 필요 하고 나머지 데이터는 공간만 차지하니 id값만 가져와서 데이터 효율을 늘린다
            // 서버로 부터 프론트에 필요한 데이터만 보내주기
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//GET /user/1
router.get("/loadUser/:userId", async (req, res, next) => {
  try {
    // const user = await User.findOne({
    //   where: { id: req.user.id },
    // });
    // res.status(200).json(user);
    const fullUserWithoutPassword = await User.findOne({
      // 여기서 가져오는건 models에 있는 db.User.hasMany(db.Post); 같은거 에서 가져온다
      // 근데 hasMany라서 model: Post가 복수형이 되서 me.Posts가 된다
      // sequelize 가 다른테이블 들의 관계를 합쳐서 보내준다
      where: { id: req.params.userId },
      // attributes: ["id", "nickname", "email"], attributes를 쓰면 특정 데이터를 가져오거나 제외하거나 할수있다
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          // post의 length만 필요 하고 나머지 데이터는 공간만 차지하니 id값만 가져와서 데이터 효율을 늘린다
          // 서버로 부터 프론트에 필요한 데이터만 보내주기
          model: Post,
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followings",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
      ],
    });
    if (fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON();
      console.log(data.Followers.length);
      data.Posts = data.Posts.length; // 개인정보 침해 예방
      data.Followers = data.Followers.length;
      data.Followings = data.Followings.length;
      res.status(200).json(data);
    } else {
      res.status(404).json("여기가 왜 실행됨???");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /user/login
// 여기서 login 전략 세우기 passport
router.post("/login", isNotLoggedIn, (req, res, next) => {
  // middleware 확장
  // passport.authenticate는 (req, res, next)를 쓸수 없는데 확장해서 쓸수있게 한다
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    // 여기서 로그인 (passport에 들어있음)
    // 서비스 로그인이 아닌 passport login임  서비스 로그인 후 다 통과하면 passport login을 한번더 함
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      // res.setHeader('Cookie', 'cxlhy');
      // 이부분이 실행되는 순간 cookie와 사용자 정보를 같이 front로 넘겨준다
      const fullUserWithoutPassword = await User.findOne({
        // 여기서 가져오는건 models에 있는 db.User.hasMany(db.Post); 같은거 에서 가져온다
        // 근데 hasMany라서 model: Post가 복수형이 되서 me.Posts가 된다
        // sequelize 가 다른테이블 들의 관계를 합쳐서 보내준다
        where: { id: user.id },
        // attributes: ["id", "nickname", "email"],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      console.log("로그인 마지막단계", req.session, req.user.id, req.cookies);
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

//POST /user/
router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용 중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3060");
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    // next를 통해 에러를 보내면 에러를 한방에 처리한다 express가 에러를 처리함
    next(error); // status 500
  }
});

// 로그인 한 후부터 passport에 있는 deserializeUser가 router 실행되기 전에 매번 실행되서
// req.user에 정보가 담겨져 있다
// router.post("/logout", (req, res) => {
//   req.logout();
//   req.session.destroy();
//   res.send("ok");
// });

// router.post("/logout", isLoggedIn, (req, res) => {
//   req.logout((err) => {
//     if (err) {
//       res.redirect("/");
//     } else {
//       req.session.destroy();
//       res.status(200).send("server ok: 로그아웃 완료");
//     }
//   });
// });

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout(() => {
    res.send("ok");
  });
});

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  // PATCH /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람 입니다");
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /user/1/follow
router.delete("/:userId/unfollow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람 입니다");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/1/posts
router.get("/:userId/posts", async (req, res, next) => {
  try {
    const where = { userId: req.params.userId };
    // 초기 로딩이 아닐때
    if (parseInt(req.query.lastId, 10)) {
      // 조건이 lastid보다 작은걸로
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    } // 21 20 19 18 17 16 15 14 13 12 11 10
    const posts = await Post.findAll({
      // 10개 가져와라
      where,
      limit: 10,
      // offset: 0, // 0~10 까지 가져와라 범위설정 게시글 추가 삭제 할때 문제가 있어서 안씀
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ], // 내림차순 정렬(최신꺼 가져오기) 댓글들도 내림차순으로 정렬
      include: [
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
          model: User, // 좋아요 누른사람
          as: "Likers",
          attributes: ["id"],
        },
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
      ],
    });
    // console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/followers
router.get("/followers", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(403).send("없는 사람 입니다");
    }
    const followers = await user.getFollowers({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/followings
router.get("/followings", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(403).send("없는 사람 입니다");
    }
    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /user/follower/2
router.delete("/follower/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람을 차단 하려고 합니다");
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
