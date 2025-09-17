function solution(n) {
    let answer = [...String(n)].reverse().map(Number);
    return answer;
}