const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 1; i <= 30; i++) {
    if (!input.includes(String(i))) {
      answer.push(i);
    }

    if (answer.length === 2) {
      break;
    }
  }

  console.log(answer.join("\n"));
}

solution(input);

// set으로 풀이
function solution(input) {
  const set = new Set(input);
  const answer = [];

  for (let i = 1; i <= 30; i++) {
    if (!set.has(String(i))) {
      answer.push(i);
    }

    if (answer.length === 2) {
      break;
    }
  }

  console.log(answer.join("\n"));
}
