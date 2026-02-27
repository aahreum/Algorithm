const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    answer.push(`Case #${i}: ${a + b}`);
  }

  console.log(answer.join("\n"));
}

solution(input);