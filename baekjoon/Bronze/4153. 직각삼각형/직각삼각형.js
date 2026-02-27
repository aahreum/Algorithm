const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const result = [];

  for (let line of input) {
    const arr = line.split(" ").map(Number);
    const [a, b, c] = arr.sort((x, y) => x - y);

    if (a === 0 && b === 0 && c === 0) {
      break;
    }

    if (a ** 2 + b ** 2 === c ** 2) {
      result.push("right");
    } else {
      result.push("wrong");
    }
  }

  console.log(result.join("\n"));
}

solution(input);
