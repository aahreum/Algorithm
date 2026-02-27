const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(n) {
  if (n <= 1) {
    return n;
  }

  return solution(n - 1) + solution(n - 2);
}

const n = Number(input[0]);
console.log(solution(n));