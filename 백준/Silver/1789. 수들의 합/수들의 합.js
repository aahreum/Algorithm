const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const num = Number(input[0]);

function solution(num) {
  let sum = 0;
  let current = 1;
  let count = 0;

  while (true) {
    sum += current;
    if (sum > num) {
      break;
    }
    count++;
    current++;
  }

  return count;
}

console.log(solution(num));