const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  let count = 0;
  let num = 666;

  while (true) {
    if (String(num).includes("666")) {
      count++;
    }
    if (count === N) {
      break;
    }
    num++;
  }

  console.log(num);
}

solution(input);