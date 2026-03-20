const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = input[1].split(" ").map(Number);
  const sorted = [...new Set(array.slice())].sort((a, b) => a - b);

  const rankMap = new Map();
  sorted.forEach((value, index) => {
    rankMap.set(value, index);
  });

  return array.map((a) => rankMap.get(a)).join(" ");
}

console.log(solution(input));