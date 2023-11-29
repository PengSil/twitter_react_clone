const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models/");
// db.User

const router = express.Router();

// router.post('/login',(req, res, next) => {})

// POST /user/login
// 여기서 login 전략 세우기 passport
router.post("/login", (req, res, next) => {
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
      return res.status(200).json(user);
    });
  })(req, res, next);
});

//POST /user/
router.post("/", async (req, res, next) => {
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
router.post("/user/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;
