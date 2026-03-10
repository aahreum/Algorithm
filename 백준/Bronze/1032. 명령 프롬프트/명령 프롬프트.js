const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let result = [...input[1]];

  for (let i = 2; i < input.length; i++) {
    const word = input[i];

    for (let j = 0; j < result.length; j++) {
      if (result[j] !== "?" && result[j] !== word[j]) {
        result[j] = "?";
      }
    }
  }

  return result.join("");
}

console.log(solution(input));