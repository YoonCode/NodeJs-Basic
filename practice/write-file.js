const fs = require('fs')

// 동기 파일 쓰기
// fs.writeFileSync('./message.txt', 'hello from nodejs')

// 비동기 파일 쓰기
fs.writeFile('./message.txt', 'hello from nodejs!!', () => {
  console.log('파일쓰기완료')
})
console.log('파일쓰기명령')
