const passport = require("passport");
// Strategy 구조분해 할때 이름 바꿀수 있음
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");

// login 전략을 통해 여기로 들어온다 req.body
module.exports = () => {
  // 프론트에서 서버로 보낼때 req.body.email하면서 오는걸 적어준거다
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        // 비동기 작업을 할때는 서버 에러가 날수가 있다.
        try {
          const user = await User.findOne({
            where: { email },
          });
          // passport에서는 결과를 응답해주지 않고 done 로 결과를 판단해준다
          // (서버에러, 성공, 클라이언트에러)
          if (!user) {
            // done은 callback같은것
            return done(null, false, { reason: "존재하지 않는 이메일입니다." });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다" });
        } catch (error) {
          // 서버에러
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
