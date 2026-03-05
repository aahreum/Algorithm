const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const arr = input
    .slice(1)
    .map((v) => v.split(" "))
    .sort((a, b) => a[0] - b[0])
    .map((v) => v.join(" "));

  return arr.join("\n");
}

console.log(solution(input));