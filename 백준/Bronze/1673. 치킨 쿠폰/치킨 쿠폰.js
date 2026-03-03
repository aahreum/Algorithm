const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const answer = [];

  for (let i = 0; i < input.length; i++) {
    let [n, k] = input[i].split(" ").map(Number);
    let chicken = n;

    while (n >= k) {
      chicken += Math.floor(n / k);
      n = Math.floor(n / k) + (n % k);
    }

    answer.push(chicken);
  }

  return answer.join("\n");
}

console.log(solution(input));
