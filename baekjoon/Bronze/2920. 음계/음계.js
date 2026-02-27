const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function solution(arr) {
  if (arr.every((v, i) => v === i + 1)) return "ascending";
  if (arr.every((v, i) => v === 8 - i)) return "descending";

  return "mixed";
}

console.log(solution(input));