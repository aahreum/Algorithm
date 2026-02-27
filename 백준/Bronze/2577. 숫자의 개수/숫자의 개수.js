const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const object = {};
  const number = input.map(Number).reduce((acc, curr) => {
    return curr * acc;
  }, 1);
  const array = [...String(number)];

  for (let i = 0; i < array.length; i++) {
    if (array[i] in object) {
      object[array[i]] += 1;
    } else {
      object[array[i]] = 1;
    }
  }

  for (let i = 0; i <= 9; i++) {
    if (object[i]) {
      console.log(object[i]);
    } else {
      console.log(0);
    }
  }
}

solution(input);