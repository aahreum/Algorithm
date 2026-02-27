const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  console.log(input[0].length);
}

solution(input);