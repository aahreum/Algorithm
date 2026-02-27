const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().split(' ')

solution(input)

function solution(input) {
  console.log(Number(input[0]) - Number(input[1]))
}
