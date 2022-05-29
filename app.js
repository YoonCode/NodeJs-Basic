// NodeJs Server 생성
const http = require('http')
const fs = require('fs')

// 콜백 함수
// 1. 이름 있는 함수 사용
// function rqListener(req, res) {}
// http.createServer(rqListener)
// 2. 익명 함수 사용
// http.createServer(function(req, res) {})
// 3. Arrow 함수 사용
// http.createServer((req, res) => {})
const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write(
      '<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>',
    )
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY') // 파일 생성, 메시지 저장
    res.statusCode = 302 // 상태 코드 302 : 리다이렉션 코드
    res.setHeader('Location', '/') // 리다이렉션
    return res.end()
  }
  // console.log(req)
  // console.log(req.url, req.method, req.headers)
  // process.exit() // 서버 종료
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end()
}) // 생성된 서버를 상수로 저장

server.listen(3000)
