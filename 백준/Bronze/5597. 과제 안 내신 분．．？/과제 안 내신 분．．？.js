const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = input.sort((a, b) => a - b);
  const answer = [];

  for (let i = 1; i <= 30; i++) {
    if (!array.includes(String(i))) {
      answer.push(i);
    }

    if (answer.length === 2) {
      break;
    }
  }

  console.log(answer.join("\n"));
}

solution(input);
