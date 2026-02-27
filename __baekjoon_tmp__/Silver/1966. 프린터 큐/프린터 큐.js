const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const testCaseCount = Number(input[0]);

  for (let i = 1; i < testCaseCount * 2; i += 2) {
    const [_, targetIndex] = input[i].split(" ").map(Number);

    const queue = input[i + 1].split(" ").map((p, index) => {
      return { priority: p, isTarget: index === targetIndex };
    });

    let printCount = 0;

    while (queue.length > 0) {
      const current = queue.shift();

      if (queue.some((q) => q.priority > current.priority)) {
        queue.push(current);
      } else {
        printCount++;
        if (current.isTarget) {
          console.log(printCount);
          break;
        }
      }
    }
  }
}

solution(input);
