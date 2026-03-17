const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = [...new Set(input.slice(1))];

  array.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });

  return array.join("\n");
}

console.log(solution(input));
