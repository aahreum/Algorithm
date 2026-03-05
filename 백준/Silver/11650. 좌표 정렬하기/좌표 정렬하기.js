const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const arr = input.slice(1).map((v) => v.split(" ").map(Number));
  arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let result = "";
  for (const [x, y] of arr) {
    result += `${x} ${y}\n`;
  }

  return result;
}

console.log(solution(input));