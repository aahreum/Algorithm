const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

function solution(input) {
  let number = Number(input)
  let answer = 0
  for (let i = 1; i <= number; i++) {
    answer += i
  }
  console.log(answer)
}

solution(input)
