const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const number = Number(input[0]);

function solution(number) {
  if (number === 1 || number === 0) {
    return 1;
  }

  return number * solution(number - 1);
}

console.log(solution(number));
