const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = input.map(Number);
  const set = new Set([]);
  for (let i = 0; i < array.length; i++) {
    set.add(array[i] % 42);
  }

  return set.size;
}

console.log(solution(input));