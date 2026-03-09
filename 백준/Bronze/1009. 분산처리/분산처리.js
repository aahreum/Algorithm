const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const result = [];

  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    const last = a % 10;
    const exp = b % 4 || 4;
    const value = last ** exp % 10 || 10;
    result.push(value);
  }

  return result.join("\n");
}

console.log(solution(input));