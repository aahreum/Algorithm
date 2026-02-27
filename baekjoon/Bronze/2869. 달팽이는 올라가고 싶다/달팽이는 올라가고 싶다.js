const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [A, B, V] = input[0].split(" ").map(Number);

  const days = Math.ceil((V - A) / (A - B)) + 1;
  console.log(days);
}

solution(input);