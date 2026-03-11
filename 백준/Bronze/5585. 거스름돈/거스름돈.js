const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(money) {
  let count = 0;
  let change = 1000 - money;

  const coins = [500, 100, 50, 10, 5, 1];

  for (const coin of coins) {
    const use = Math.floor(change / coin);
    count += use;
    change -= use * coin;
  }

  return count;
}

console.log(solution(Number(input[0])));
