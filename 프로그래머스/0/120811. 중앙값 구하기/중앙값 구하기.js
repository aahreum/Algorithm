function solution(array) {
    const answer = array.sort((a, b) => a - b);
    const index = Math.floor(answer.length / 2)
    return answer[index];
}