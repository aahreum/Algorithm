function solution(polynomial) {
    const array = polynomial.split(' + ');
    let xSum = 0;
    let numSum = 0;
    
    for (const num of array) {
        if (num.includes('x')) {
            const x = num.replace('x', '');
            xSum += x === '' ? 1 : Number(x);
        } else {
            numSum += Number(num);
        }
    }
    
    const xPart = xSum === 1 ? 'x' : `${xSum}x`;
    
    if (xSum === 0) {
        return `${numSum}`;
    } else if (numSum === 0) {
        return `${xPart}`;
    } else {
        return `${xPart} + ${numSum}`
    }
}