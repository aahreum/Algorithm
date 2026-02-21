function solution(order) {
    const answer = [...String(order)].filter((s) => s === '3' || s === '6' || s === '9');
    return answer.length;
}