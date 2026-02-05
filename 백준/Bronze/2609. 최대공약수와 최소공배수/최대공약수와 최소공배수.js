const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function getGCD(num1, num2) {
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
}

function getLCM(num1, num2) {
  return (num1 * num2) / getGCD(num1, num2);
}

function solution(input) {
  const [num1, num2] = input[0].split(" ").map(Number);
  const gcd = getGCD(num1, num2);
  const lcm = getLCM(num1, num2);

  console.log(`${gcd}\n${lcm}`);
}

solution(input);