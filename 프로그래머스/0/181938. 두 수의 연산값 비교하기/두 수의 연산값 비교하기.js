function solution(a, b) {
    const sumAB = Number(`${a}${b}`)
    const multiAB = 2 * a * b
    return sumAB >= multiAB ? sumAB : multiAB;
}