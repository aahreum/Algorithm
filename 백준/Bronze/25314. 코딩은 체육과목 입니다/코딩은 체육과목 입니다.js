const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

function solution(input) {
  const number = Number(input)
  const quotient = number / 4
  let answer = ''
  for (let i = 0; i < quotient; i++) {
    answer += 'long '
  }

  return answer + 'int'
}

console.log(solution(input))
