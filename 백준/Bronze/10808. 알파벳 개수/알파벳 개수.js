const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const count = Array(26).fill(0);

for (const c of input) {
  count[c.charCodeAt(0) - 97]++;
}

console.log(count.join(" "));