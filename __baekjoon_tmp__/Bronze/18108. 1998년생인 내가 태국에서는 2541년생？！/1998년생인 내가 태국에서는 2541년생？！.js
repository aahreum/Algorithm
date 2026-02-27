const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(input) {
  const year = Number(input)
  const term = 543
  console.log(year - term)
}

solution(input)