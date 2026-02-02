const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = Array.from({ length: Number(input) }, (_, i) => i + 1);

  let head = 0;

  while (array.length - head > 1) {
    head++;
    array.push(array[head]);
    head++;
  }

  console.log(array[head]);
}

solution(input);
