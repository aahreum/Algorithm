const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

function solution(input) {
  const year = Number(input)

  if (year % 4 === 0 && year % 100 !== 0) {
    return 1
  } else if (year % 100 === 0 && year % 400 === 0) {
    return 1
  }

  return 0
}

console.log(solution(input))