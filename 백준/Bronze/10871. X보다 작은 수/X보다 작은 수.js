const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, X] = input[0].split(" ").map(Number);
  const array = input[1].split(" ").map(Number);
  const answer = [];

  for (let i = 0; i < N; i++) {
    if (X > array[i]) {
      answer.push(array[i]);
    }
  }

  return answer.join(" ");
}

console.log(solution(input));