const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 2; i <= input.length; i += 2) {
    const array = input[i].split(" ").map(Number);
    const max = Math.max(...array);
    const min = Math.min(...array);

    answer.push(`${min} ${max}`);
  }

  return answer.join("\n");
}

console.log(solution(input));