const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  const prefix = [0];

  for (let i = 0; i < N; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }

  const answer = [];

  for (let i = 2; i < 2 + M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    answer.push(prefix[b] - prefix[a - 1]);
  }

  return answer.join("\n");
}

console.log(solution(input));