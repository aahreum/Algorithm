const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const [B, C] = input[2].split(" ").map(Number);

function solution(n, students, mainSupervisor, subSupervisor) {
  const totalMain = n;
  let totalSub = 0;

  for (let i = 0; i < students.length; i++) {
    let remain = students[i] - mainSupervisor;

    if (remain > 0) {
      totalSub += Math.ceil(remain / subSupervisor);
    }
  }

  return totalMain + totalSub;
}

console.log(solution(N, A, B, C));