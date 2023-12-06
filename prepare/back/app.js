const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
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
app.use(morgan("dev"));

// front에서 보낸 데이터를 req.body안에 넣어주는 역활(use안에 들어가는것들 미들웨어)
// json형식의 데이터를 req.body 안에 넣어준다
app.use(
  cors({
    // credentials true로 하고 withCredentials를 하면 민감한 데이터 cookie 같은걸 다루게 되서 보안에 민감하게 된다
    // 그래서 origin: '*' 로 하면 오류남 정확한 주소를 적어줘야함
    origin: "http://localhost:3060",
    credentials: true,
  })
);
// back폴더 안의 uploads를 합쳐준다 앞에 '/' 는 localhost:3065/ /이다
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json()); // axios로 보낼때 받기
// router나 app 에 붙는 애들은 다 middleware다 router.post app.use등등
// form submit했을때 urlencoded방식으로 넘어오는데 그걸 처리함 req.body
app.use(express.urlencoded({ extended: true })); // form보낸거 받기
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

app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);

// 여기에 마지막에 내부적으로 error처리 미들웨어가 있음 안보임
// app.use((err, req, res, next) => {}); 따로 에러처리 미들웨어를 사용할수 있음

app.listen(3065, () => {
  console.log("서버 실행 중");
});
