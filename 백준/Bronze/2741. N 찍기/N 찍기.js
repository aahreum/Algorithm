const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

function solution(input) {
  const N = Number(input);
  for (let i = 1; i <= N; i++) {
    console.log(i);
  }
}

solution(input);