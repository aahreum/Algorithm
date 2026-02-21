const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  const result = [];

  for (let i = 0; i < N; i++) {
    const rowA = input[1 + i].split(" ").map(Number);
    const rowB = input[1 + N + i].split(" ").map(Number);

    const sumRow = [];

    for (let j = 0; j < M; j++) {
      sumRow.push(rowA[j] + rowB[j]);
    }

    result.push(sumRow.join(" "));
  }

  console.log(result.join("\n"));
}

solution(input);
