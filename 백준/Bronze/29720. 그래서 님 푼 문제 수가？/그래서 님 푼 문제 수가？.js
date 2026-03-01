const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(input) {
  const [N, M, K] = input.map(Number);

  const min = Math.max(0, N - M * K);
  const max = N - M * K + (M - 1);

  console.log(min, max);
}

solution(input);