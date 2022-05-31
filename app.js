const http = require('http')

const routes = require('./routes') // 1. 같은 폴더 안에 있는 routes.js 를 찾을 것

const server = http.createServer(routes) // 3. routes.js 의 requestHandler 를 사용할 수 있음

// console.log(routes.someText)

// const server = http.createServer(routes.handler)

server.listen(3000)
