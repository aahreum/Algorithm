const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  return input.charCodeAt();
}

console.log(solution(input));