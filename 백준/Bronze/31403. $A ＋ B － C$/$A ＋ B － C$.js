const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [A, B, C] = input.map(Number);
  console.log(A + B - C);
  console.log(Number(`${A}${B}`) - C);
}

solution(input);
