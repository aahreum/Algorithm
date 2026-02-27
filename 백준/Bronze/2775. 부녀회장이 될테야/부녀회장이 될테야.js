const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  const answer = [];

  for (let test = 1; test <= T * 2; test += 2) {
    const k = Number(input[test]);
    const n = Number(input[test + 1]);
    const dp = Array.from({ length: k + 1 }, () => Array(n).fill(1));

    for (let i = 0; i < n; i++) {
      dp[0][i] = i + 1;
    }

    for (let floor = 1; floor <= k; floor++) {
      for (let room = 1; room < n; room++) {
        dp[floor][room] = dp[floor][room - 1] + dp[floor - 1][room];
      }
    }

    answer.push(dp[k][n - 1]);
  }

  console.log(answer.join("\n"));
}
solution(input);
