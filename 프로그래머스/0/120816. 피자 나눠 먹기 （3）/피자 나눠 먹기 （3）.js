function solution(slice, n) {
    let answer = n % slice === 0 ? n / slice : Math.trunc(n / slice) + 1;
    return answer;
}