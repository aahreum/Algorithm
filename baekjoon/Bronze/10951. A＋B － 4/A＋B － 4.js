const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const results = [];

  for (let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    results.push(A + B);
  }

  console.log(results.join("\n"));
}

solution(input);