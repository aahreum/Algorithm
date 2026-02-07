const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 1; i < input.length; i++) {
    const stack = [];

    for (const ch of input[i]) {
      if (ch === "(") {
        stack.push(ch);
      } else {
        if (stack.length === 0) {
          stack.push(ch);
          break;
        }
        stack.pop();
      }
    }

    if (stack.length === 0) {
      answer.push("YES");
    } else {
      answer.push("NO");
    }
  }

  console.log(answer.join("\n"));
}

solution(input);