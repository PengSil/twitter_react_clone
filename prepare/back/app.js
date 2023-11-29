const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

const app = express();
dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();

// front에서 보낸 데이터를 req.body안에 넣어주는 역활(use안에 들어가는것들 미들웨어)
// json형식의 데이터를 req.body 안에 넣어준다
app.use(
  cors({
    origin: "*",
    //credentials: false,
  })
);
app.use(express.json());
// router나 app 에 붙는 애들은 다 middleware다 router.post app.use등등
// form submit했을때 urlencoded방식으로 넘어오는데 그걸 처리함 req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
/* 
  cookie의 랜덤 문자열은 데이터를 기반으로 만들어진 문자열이라
  cookie 값에서 오는 랜덤 값 과 secret key에 있는 nodebirdsecret를 알면 복호화가 가능해 해킹이 가능하니 secret 값은 숨겨야한다
*/
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체 수정
// app.delete -> 제거
// app.patch -> 부분 수정
// app.options -> 찔러보기 데이터 가져올수있나
// app.head -> 헤더만 가져오기(헤더/바디)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});
