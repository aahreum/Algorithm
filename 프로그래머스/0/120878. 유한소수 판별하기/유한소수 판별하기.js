function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

function solution(a, b) {
    const gcd = getGCD(a, b);
    b = b / gcd;
    const primeFactors = [];
    
    for (let i = 2; i * i <= b; i++) {
        if (b % i === 0) {
            primeFactors.push(i);
            
            while (b % i === 0) {
                b /= i;
            }
        }
    }
    
    if (b > 1) {
        primeFactors.push(b);
    }
    
    return primeFactors.every((v) => v === 2 || v === 5) ? 1 : 2;
}