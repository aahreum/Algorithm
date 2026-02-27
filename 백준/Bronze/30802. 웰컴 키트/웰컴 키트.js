const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function formatArray(string) {
  return string.split(" ").map(Number);
}

function solution(input) {
  const N = Number(input[0]);
  const sizes = formatArray(input[1]);
  const [T, P] = formatArray(input[2]);

  const tshirtBundleCount = sizes.reduce((acc, curr) => {
    return Math.ceil(curr / T) + acc;
  }, 0);

  const penBundleCount = Math.floor(N / P);
  const singlePenCount = N % P;

  console.log(
    `${tshirtBundleCount}
${penBundleCount} ${singlePenCount}`,
  );
}

solution(input);