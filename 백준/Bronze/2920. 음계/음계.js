const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

function solution(input) {
  const terms = input;
  const ascending = input
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");
  const descending = input
    .split(" ")
    .sort((a, b) => b - a)
    .join(" ");

  if (terms === ascending) {
    return "ascending";
  } else if (terms === descending) {
    return "descending";
  } else {
    return "mixed";
  }
}

console.log(solution(input));