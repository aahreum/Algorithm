const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const word = input[0];
  const index = Number(input[1]);

  return word[index - 1];
}

console.log(solution(input));
