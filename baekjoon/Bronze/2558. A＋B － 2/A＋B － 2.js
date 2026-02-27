const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  return Number(input[0]) + Number(input[1]);
}

console.log(solution(input));