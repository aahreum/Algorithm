const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    const [repeat, word] = input[i].split(" ");
    const answer = [...word].map((w) => w.repeat(Number(repeat))).join("");
    console.log(answer);
  }
}

solution(input);