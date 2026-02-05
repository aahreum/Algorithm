function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) { 
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    const gcd = getGCD(numer, denom);
    
    return [numer / gcd, denom / gcd];
}