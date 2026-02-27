const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [num1, num2] = input[0]
    .split(" ")
    .map((n) => Number([...n].reverse().join("")));

  console.log(Math.max(num1, num2));
}

solution(input);