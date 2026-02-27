const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  if (input.length === 0) {
    console.log(0);
    return;
  }

  const array = input.split(" ");
  console.log(array.length);
}

solution(input);