// NodeJs Server 생성
const http = require('http')

// 콜백 함수
// 1. 이름 있는 함수 사용
// function rqListener(req, res) {}
// http.createServer(rqListener)
// 2. 익명 함수 사용
// http.createServer(function(req, res) {})
// 3. Arrow 함수 사용
// http.createServer((req, res) => {})
const server = http.createServer((req, res) => {
  console.log(req)
}) // 생성된 서버를 상수로 저장

server.listen(3000)
