const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 1; i < input.length; i++) {
    const text = input[i];
    answer.push(`${text[0]}${text[text.length - 1]}`);
  }

  console.log(answer.join("\n"));
}

solution(input);