const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const stack = [];
  const result = [];

  for (let i = 1; i < input.length; i++) {
    const condition = input[i].split(" ");

    switch (condition[0]) {
      case "1":
        stack.push(Number(condition[1]));
        break;
      case "2":
        result.push(stack.length ? stack.pop() : -1);
        break;
      case "3":
        result.push(stack.length);
        break;
      case "4":
        result.push(stack.length ? 0 : 1);
        break;
      case "5":
        result.push(stack.length ? stack[stack.length - 1] : -1);
        break;
    }
  }

  console.log(result.join("\n"));
}

solution(input);