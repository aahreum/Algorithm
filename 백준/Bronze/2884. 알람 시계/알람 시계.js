const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

function solution(input) {
  const hour = Number(input[0])
  const minute = Number(input[1])
  let time = hour * 60 + minute - 45

  if (time < 0) {
    time += 24 * 60
  }

  const newHour = Math.floor(time / 60) % 24
  const newMinute = time % 60

  console.log(newHour, newMinute)
}

solution(input)