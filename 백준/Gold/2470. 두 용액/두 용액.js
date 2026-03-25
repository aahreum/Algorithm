const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const array = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let left = 0;
  let right = N - 1;

  let minSum = Infinity;
  let answer = [0, 0];

  while (left < right) {
    const sum = array[left] + array[right];

    if (Math.abs(sum) < minSum) {
      minSum = Math.abs(sum);
      answer = [array[left], array[right]];
    }

    if (sum === 0) {
      break;
    }

    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return answer.join(" ");
}

console.log(solution(input));