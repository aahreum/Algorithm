function solution(n) {
    let answer = 0;
    if (n % 7 === 0) {
        answer = n / 7;
    } else {
        answer = Math.trunc(n / 7) + 1; 
    }
    return answer;
}

// 올림을 쓰면 더 간편
function solution(n) {
    return Math.ceil(n / 7)
}