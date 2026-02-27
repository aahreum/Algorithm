const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const stack = [];
  const N = Number(input[0]);
  const result = [];

  for (let i = 1; i <= N; i++) {
    const [cmd, value] = input[i].split(" ");

    switch (cmd) {
      case "push":
        stack.push(Number(value));
        break;

      case "pop":
        result.push(stack.length ? stack.pop() : -1);
        break;

      case "top":
        result.push(stack.length ? stack[stack.length - 1] : -1);
        break;

      case "size":
        result.push(stack.length);
        break;

      case "empty":
        result.push(stack.length === 0 ? 1 : 0);
        break;
    }
  }

  console.log(result.join("\n"));
}

solution(input);
