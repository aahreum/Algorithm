function solution(n, t) {
    // 이전 시간의 2배여서 2의 t승
    let answer = n * 2 ** t;
    return answer;
}