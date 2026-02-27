const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = input[1].split("").reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
  return answer;
}

console.log(solution(input));