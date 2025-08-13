function solution(n) {
    let answer = 0;
    let str = String(n);
    for (let i = 0; i < str.length; i++) {  
        answer += +str[i];
    }
    return answer;
}

// 형 변환 없이 숫자 그대로 푸는 방법
function solution(n) {
    let result = 0;
    
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n/10);
    }

    return result;
}