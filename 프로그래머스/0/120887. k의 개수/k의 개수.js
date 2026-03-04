function solution(i, j, k) {
    const length = j - i + 1;
    const answer = Array.from({ length }, (_, idx) => i + idx).join('').split('').filter((s) => Number(s) === k);
    return answer.length;
}