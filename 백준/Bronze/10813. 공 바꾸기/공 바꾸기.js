const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

function solution(n, m, queries) {
  const array = Array.from({ length: n }, (_, i) => i + 1);

  for (let idx = 0; idx < m; idx++) {
    const [i, j] = queries[idx].split(" ").map((n) => Number(n) - 1);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.join(" ");
}

console.log(solution(N, M, input.slice(1)));