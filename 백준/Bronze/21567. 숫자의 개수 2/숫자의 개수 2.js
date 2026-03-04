const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [e, f, c] = input.map(BigInt);
  const double = String(e * f * c);
  const count = Array(10).fill(0);

  for (const n of double) {
    count[n]++;
  }

  console.log(count.join("\n"));
}

solution(input);