const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const hasCardArray = input[1].split(" ");
  const needCardArray = input[3].split(" ");

  const hasCardMap = new Map();

  hasCardArray.forEach((val) => {
    hasCardMap.set(val, (hasCardMap.get(val) || 0) + 1);
  });

  return needCardArray.map((val) => hasCardMap.get(val) || 0).join(" ");
}

console.log(solution(input));