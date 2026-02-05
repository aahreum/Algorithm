function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

function solution(numer1, denom1, numer2, denom2) { 
    const lcm = getLCM(denom1, denom2);
    const numer = (lcm / denom1) * numer1 + (lcm / denom2) * numer2;
    const gcd = getGCD(numer, lcm);
    
    return [numer / gcd, lcm / gcd];
}