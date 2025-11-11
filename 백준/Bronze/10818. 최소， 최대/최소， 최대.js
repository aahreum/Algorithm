const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = input[1].split(" ").map(Number);
  const min = Math.min(...array);
  const max = Math.max(...array);

  console.log(min, max);
}

solution(input);