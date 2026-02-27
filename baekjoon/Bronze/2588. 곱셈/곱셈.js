const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(input) {
  const num1 = Number(input[0])
  const num2 = Number(input[1])
  const numArr = [...input[1]].reverse()

  numArr.forEach((num) => {
    console.log(num1 * num)
  })
  console.log(num1 * num2)
}

solution(input)