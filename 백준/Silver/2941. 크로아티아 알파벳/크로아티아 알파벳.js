const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0];

function solution(input) {
  const answer = input.replace(/(c=|c-|dz=|d-|lj|nj|s=|z=)/g, "*");
  return answer.length;
}

console.log(solution(input));
