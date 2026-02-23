const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const array = [];

  for (let i = 1; i < input.length; i++) {
    array.push(input[i].split(" ").map(Number));
  }

  array.sort((a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;

    if (y1 !== y2) {
      return y1 - y2;
    } else {
      return x1 - x2;
    }
  });

  console.log(array.map(([x, y]) => `${x} ${y}`).join("\n"));
}

solution(input);