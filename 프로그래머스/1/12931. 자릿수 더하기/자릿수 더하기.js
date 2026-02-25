function solution(n) {
    const answer = [...String(n)].reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}