const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  const results = [];

  for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    results.push(a + b);
  }

  console.log(results.join("\n"));
}

solution(input);