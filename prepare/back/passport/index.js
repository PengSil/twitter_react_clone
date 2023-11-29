const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

// passport login이 되면 여기로 온다
module.exports = () => {
  // req.login의 정보가 여기로 들어온다
  passport.serializeUser((user, done) => {
    // user의 정보중에서 session에 다 들고있으면 무거우니 cookie와 묶어줄 id만 저장
    // cookie 와 user.id만 서버에서 들고 있는다
    done(null, user.id);
  });
  // router실행되기 이전에 매번 실행해서 정보값을 가져다줌 req.user
  passport.deserializeUser(async (id, done) => {
    // 복구할때는 serializeUser에 있는 user.id가 여기로 전달되서 이 id로 db에서 데이터 찾아와서 저장
    // 다음 요청부터는 여기서 db에서 id를 통해 사용자를 찾음
    try {
      const user = await User.findOne({ where: { id } });
      // (서버에러, 성공)
      // 여기서 id 저장한것을 통해서 db로 데이터 복구를 해서 req.user 안에 넣어준다
      done(null, user); // req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
