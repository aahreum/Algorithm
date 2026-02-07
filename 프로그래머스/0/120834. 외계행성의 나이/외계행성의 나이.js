function solution(age) {
   return String(age).split('').map((s) => String.fromCharCode(97 + Number(s))).join('');
}