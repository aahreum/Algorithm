function solution(n) {
    let answer = 0;
    let string = String(n);
    for (let i = 0; i < string.length; i++) {  
        answer += +string[i];
    }
    return answer;
}