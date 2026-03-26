const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const colorMap = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

function solution(input) {
  const color1 = colorMap[input[0]];
  const color2 = colorMap[input[1]];
  const color3 = colorMap[input[2]];

  const base = color1 * 10 + color2;

  return base * 10 ** color3;
}

console.log(solution(input));