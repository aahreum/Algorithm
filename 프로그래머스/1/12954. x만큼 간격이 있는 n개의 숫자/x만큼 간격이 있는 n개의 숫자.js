function solution(x, n) {
    const answer = Array.from( { length: n }, (_, idx) => (idx + 1) * x);
    return answer;
}