const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

function solution(input) {
  const x = Number(input[0])
  const y = Number(input[1])

  if (x * y > 0) {
    return x > 0 ? 1 : 3
  } else {
    return x > 0 ? 4 : 2
  }
}

console.log(solution(input))