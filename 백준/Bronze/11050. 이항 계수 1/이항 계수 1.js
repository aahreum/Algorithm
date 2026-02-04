const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);

  const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

  for (let i = 0; i <= N; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= Math.min(i, K); j++) {
      if (j === i) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }

  console.log(dp[N][K]);
}

solution(input);