const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(input) {
  const [e, f, c] = input.map(Number);

  let empty = e + f;
  let answer = 0;

  while (empty >= c) {
    answer += Math.floor(empty / c);
    empty = Math.floor(empty / c) + (empty % c);
  }

  return answer;
}

console.log(solution(input));