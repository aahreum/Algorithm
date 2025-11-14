const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  for (let i = 1; i < input.length; i++) {
    const oxResult = input[i];
    let current = 0;
    let total = 0;

    for (const char of oxResult) {
      if (char === "O") {
        current++;
        total += current;
      } else {
        current = 0;
      }
    }

    console.log(total);
  }
}

solution(input);