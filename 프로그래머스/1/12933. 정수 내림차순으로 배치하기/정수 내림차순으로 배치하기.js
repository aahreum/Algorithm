function solution(n) {
    const answer = [...String(n)].sort((a, b) => b - a)
    return +answer.join('');
}