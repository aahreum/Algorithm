const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let count = 0;

  for (let i = 1; i <= input[0]; i++) {
    const word = input[i];
    const set = new Set();
    let group = true;
    let prev = "";

    for (const w of word) {
      if (w !== prev && set.has(w)) {
        group = false;
        break;
      }
      set.add(w);
      prev = w;
    }

    if (group) {
      count++;
    }
  }

  return count;
}

console.log(solution(input));