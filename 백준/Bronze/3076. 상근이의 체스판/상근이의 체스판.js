const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [R, C] = input[0].split(" ").map(Number);
  const [A, B] = input[1].split(" ").map(Number);

  for (let i = 0; i < R * A; i++) {
    let line = "";

    for (let j = 0; j < C * B; j++) {
      const r = Math.floor(i / A);
      const c = Math.floor(j / B);

      line += (r + c) % 2 === 0 ? "X" : ".";
    }

    console.log(line);
  }
}

solution(input);
