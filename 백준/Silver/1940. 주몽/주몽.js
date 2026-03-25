const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const M = Number(input[1]);
  const array = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let left = 0;
  let count = 0;
  let right = N - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === M) {
      count++;
      left++;
      right--;
    } else if (sum < M) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}

console.log(solution(input));