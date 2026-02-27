const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const number = Number(input[0]);

  return number * 4;
}

console.log(solution(input));