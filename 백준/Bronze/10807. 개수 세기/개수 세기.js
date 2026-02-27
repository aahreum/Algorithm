const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(input) {
  const targetArray = input[1].split(' ').map(Number);
  const targetNumber = Number(input[2]);
  const count = targetArray.filter(num => num === targetNumber).length;
  
  console.log(count);
}

solution(input);