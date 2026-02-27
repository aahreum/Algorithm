const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const array = Array.from({ length: N }, () => 0);

  for (let h = 1; h <= M; h++) {
    const [i, j, k] = input[h].split(" ").map(Number);

    for (let idx = i - 1; idx < j; idx++) {
      array[idx] = k;
    }
  }

  return array.join(" ");
}

console.log(solution(input));