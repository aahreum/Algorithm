const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const stack = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== "0") {
      stack.push(input[i]);
    } else {
      stack.pop();
    }
  }

  const sum = stack.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);

  console.log(sum);
}

solution(input);