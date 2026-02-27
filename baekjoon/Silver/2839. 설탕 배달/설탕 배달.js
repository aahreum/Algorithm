const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  let five = Math.floor(n / 5);

  while (five >= 0) {
    const remain = n - five * 5;

    if (remain % 3 === 0) {
      console.log(five + remain / 3);
      return;
    }

    five--;
  }

  console.log(-1);
}

solution(input);
