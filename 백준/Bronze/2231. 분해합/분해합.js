const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const digit = input[0].length;
  const M = Number(input[0]);
  const start = M - digit * 9;

  for (let N = start; N < M; N++) {
    const digitSum = String(N)
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);
    if (N + digitSum === M) {
      return N;
    }
  }

  return 0;
}

console.log(solution(input));