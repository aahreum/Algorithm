const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution(input) {
  const answer = input
    .map((el) => Number(el) ** 2)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  return answer % 10;
}

console.log(solution(input));