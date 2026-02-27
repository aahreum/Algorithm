const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution(input) {
  const [dice1, dice2, dice3] = input.map((n) => Number(n));
  if (dice1 === dice2 && dice2 === dice3) {
    return 10000 + dice1 * 1000;
  } else if (dice1 === dice2 || dice2 === dice3 || dice1 === dice3) {
    const same = dice1 === dice2 ? dice1 : dice2 === dice3 ? dice2 : dice1;
    return 1000 + same * 100;
  } else {
    return Math.max(dice1, dice2, dice3) * 100;
  }
}

console.log(solution(input));
