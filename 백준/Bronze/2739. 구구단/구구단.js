const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

function solution(input) {
  const gugudan = Number(input)
  for (let i = 1; i <= 9; i++) {
    console.log(`${gugudan} * ${i} = ${gugudan * i}`)
  }
}

solution(input)