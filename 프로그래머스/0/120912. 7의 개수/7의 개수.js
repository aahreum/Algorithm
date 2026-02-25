function solution(array) {
    const answer = array.join('').replace(/[^7]/g, '').length;
    return answer;
}