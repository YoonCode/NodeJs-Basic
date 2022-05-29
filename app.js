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
  // console.log(req)
  console.log(req.url, req.method, req.headers)
  // process.exit() // 서버 종료
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end()
}) // 생성된 서버를 상수로 저장

server.listen(3000)
