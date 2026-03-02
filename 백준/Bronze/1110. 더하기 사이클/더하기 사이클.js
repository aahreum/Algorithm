const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(n) {
  let original = Number(n);
  let current = original;
  let count = 0;

  do {
    const tens = Math.floor(current / 10);
    const ones = current % 10;
    const sum = tens + ones;

    current = ones * 10 + (sum % 10);
    count++;
  } while (current !== original);

  return count;
}

console.log(solution(input));
