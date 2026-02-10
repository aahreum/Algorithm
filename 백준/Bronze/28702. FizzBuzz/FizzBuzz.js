const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function fizzBuzzValue(n) {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  }
  return String(n);
}

function solution(input) {
  const [a, b, c] = input.map(Number);

  let base = 0;

  if (!isNaN(a)) {
    base = a;
  } else if (!isNaN(b)) {
    base = b - 1;
  } else {
    base = c - 2;
  }

  console.log(fizzBuzzValue(base + 3));
}

solution(input);