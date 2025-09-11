const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(input) {
  let [_, arr, num] = input
  arr = arr.split(' ')

  console.log(arr.filter((n) => n === num).length)
}

solution(input)
