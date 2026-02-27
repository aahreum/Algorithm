const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

function solution(input) {
  const num1 = Number(input[0])
  const num2 = Number(input[1])
  console.log(num1 >= num2 ? (num1 === num2 ? '==' : '>') : '<')
}

solution(input)