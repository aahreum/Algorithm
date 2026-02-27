const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(n) {
  const MOD = 1000000;
  const PISANO = 1500000; // 96과 62500의 최소공배수

  n = Number(n % BigInt(PISANO));

  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, (a + b) % MOD];
  }

  return b;
}

const n = BigInt(input[0]);
console.log(solution(n));