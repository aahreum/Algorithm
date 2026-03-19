const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

function solution(str) {
  let total = 0;

  for (const s of str) {
    for (const key in dial) {
      if (key.includes(s)) {
        total += dial[key];
        break;
      }
    }
  }

  return total;
}

console.log(solution(input[0]));
