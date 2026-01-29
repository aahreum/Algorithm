const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const scoreArray = input[1].split(" ");
  const maxScore = Math.max(...scoreArray);
  const sum = scoreArray.reduce(
    (acc, curr) => (curr / maxScore) * 100 + acc,
    0,
  );
  console.log(sum / Number(input[0]));
}

solution(input);
