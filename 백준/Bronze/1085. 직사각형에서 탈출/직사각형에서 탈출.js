const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [x, y, w, h] = input[0].split(" ").map(Number);

  return Math.min(x, y, w - x, h - y);
}

console.log(solution(input));
