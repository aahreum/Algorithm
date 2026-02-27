const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(input) {
  let [sum, item, ...array] = input
  sum = Number(sum)
  item = Number(item)

  if (item !== array.length) {
    return 'No'
  }

  let arraySum = 0
  for (let i = 0; i < array.length; i++) {
    let [a, b] = array[i].split(' ')
    arraySum += a * b
  }
  return arraySum === sum ? 'Yes' : 'No'
}

console.log(solution(input))