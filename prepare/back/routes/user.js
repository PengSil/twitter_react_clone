const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/");
// db.User

const router = express.Router();

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
    // next를 통해 에러를 보내면 에러를 한방에 처리한다 express가 에러를 알려줌
    next(error); // status 500
  }
});

module.exports = router;
