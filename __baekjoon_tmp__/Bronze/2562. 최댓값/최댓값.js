const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = input.map(Number);
  const max = Math.max(...array);
  const index = array.indexOf(max);
  console.log(`${max}\n${index + 1}`);
}

solution(input);
