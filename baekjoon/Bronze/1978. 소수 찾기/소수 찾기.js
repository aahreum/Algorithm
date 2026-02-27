const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function isPrime(n) {
  if (n < 2) return false;

  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(input) {
  const N = Number(input[0]);
  const array = input[1].split(" ").map(Number);
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (isPrime(array[i])) {
      count++;
    }
  }

  console.log(count);
}

solution(input);
