function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

function solution(a, b) {
    const gcd = getGCD(a, b);
    b /= gcd;

    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? 1 : 2;
}