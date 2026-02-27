const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [a, b] = input;
  console.log(Number(a) * Number(b));
}

solution(input);