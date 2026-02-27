const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(n) {
  if (n <= 1) {
    return BigInt(n);
  }

  let a = 0n,
    b = 1n;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

const n = Number(input[0]);
console.log(solution(n).toString());