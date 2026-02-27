const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let acc = 0;

  const total = array.reduce((sum, curr) => {
    acc += curr;
    return sum + acc;
  }, 0);

  console.log(total);
}

solution(input);