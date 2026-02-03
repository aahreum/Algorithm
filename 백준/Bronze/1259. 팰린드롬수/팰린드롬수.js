const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 0; i < input.length - 1; i++) {
    const reverse = [...input[i]].reverse().join("");
    if (input[i] === reverse) {
      answer.push("yes");
    } else {
      answer.push("no");
    }
  }
  console.log(answer.join("\n"));
}

solution(input);
