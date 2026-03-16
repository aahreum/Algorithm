const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const F = Number(input[1]);

function solution(n, f) {
  let target = Math.floor(n / 100) * 100;
  while (target % f !== 0) {
    target++;
  }

  return String(target).slice(-2).padStart(2, "0");
}

console.log(solution(N, F));