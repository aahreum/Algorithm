const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const alphabet = {};
  for (let i = 97; i <= 122; i++) {
    alphabet[String.fromCharCode(i)] = -1;
  }

  for (let char of input) {
    alphabet[char] = input.indexOf(char);
  }

  const answer = Object.values(alphabet).join(" ");
  console.log(answer);
}

solution(input);