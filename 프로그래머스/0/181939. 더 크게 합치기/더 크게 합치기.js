function solution(a, b) {
    const strA = String(a);
    const strB = String(b);
    const numAB = Number(strA + strB);
    const numBA = Number(strB + strA)
    return numAB > numBA ? numAB : numBA;
}