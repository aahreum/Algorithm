const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);

function solution(n, k) {
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];

  while (queue.length > 0) {
    for (let i = 0; i < k - 1; i++) {
      const movedPerson = queue.shift();
      queue.push(movedPerson);
    }

    const remove = queue.shift();
    result.push(remove);
  }

  return `<${result.join(", ")}>`;
}

console.log(solution(N, K));