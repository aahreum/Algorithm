const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [hour, minute] = input[0].split(" ").map(Number);
  const cookingTime = Number(input[1]);

  const totalMinutes = hour * 60 + minute + cookingTime;

  const resultHour = Math.floor(totalMinutes / 60) % 24;
  const resultMinute = totalMinutes % 60;

  console.log(resultHour, resultMinute);
}
solution(input);
