const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const x = Number(input[2]);

  let count = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === x) {
      count++;
      left++;
      right--;
    } else if (sum < x) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}

console.log(solution(input));
