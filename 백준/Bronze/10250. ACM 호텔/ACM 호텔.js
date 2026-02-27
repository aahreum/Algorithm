const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const test = Number(input[0]);
  for (let i = 1; i <= test; i++) {
    const [H, _, N] = input[i].split(" ").map(Number);
    const floor = N % H === 0 ? H : N % H;
    const room = Math.ceil(N / H);

    console.log(floor * 100 + room);
  }
}

solution(input);