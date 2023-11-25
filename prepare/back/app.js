const http = require("http");

// createServer 라는 걸로 요청을 받고 응답을 해준다
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write("Hello");
  res.write("Hello");
  res.write("Hello");
  res.write("Hello");
  res.write("Hello");
  res.end("Hello node");
});

server.listen(3065, () => {
  console.log("서버 실행 중");
});
