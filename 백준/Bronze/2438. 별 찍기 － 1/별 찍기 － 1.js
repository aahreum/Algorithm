const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

function solution(input) {
  const number = Number(input);

  for (let i = 1; i <= number; i++) {
    console.log("*".repeat(i));
  }
}

solution(input);