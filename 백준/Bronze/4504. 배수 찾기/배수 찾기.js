const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const answer = [];

  for (let i = 1; i < input.length - 1; i++) {
    if (input[i] % N !== 0) {
      answer.push(`${input[i]} is NOT a multiple of ${N}.`);
    } else {
      answer.push(`${input[i]} is a multiple of ${N}.`);
    }
  }

  return answer.join("\n");
}

console.log(solution(input));