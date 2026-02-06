function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

function solution(n) {
    const pizza = 6;
    const answer = getLCM(n, pizza) / pizza;
    
    return answer;
}