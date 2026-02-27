const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const string = input[0];
  const reverse = [...string].reverse().join("");

  return string === reverse ? 1 : 0;
}

console.log(solution(input));