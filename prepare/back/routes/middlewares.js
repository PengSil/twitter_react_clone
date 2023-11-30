// 미들웨어 만들어서 쓰기(커스텀 미들웨어) 직접 써도 되지만 중복을 제거하기 위해 따로씀

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // next는 그냥 쓰면 다음 middleware로 가고 인수를 넣으면 에러 처리 미들웨어로 간다
    next();
  } else {
    res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};
