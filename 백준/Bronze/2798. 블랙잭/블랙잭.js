const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ");
  const array = input[1].split(" ").map(Number);
  let max = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = array[i] + array[j] + array[k];

        if (sum <= M) {
          max = Math.max(max, sum);
        }
      }
    }
  }

  console.log(max);
}
solution(input);