function solution(sides) {
    let sortSides = sides.sort((a, b) => a - b);
    if (sortSides[2] < sortSides[0] + sortSides[1]) {
        return 1;
    } else {
        return 2;
    }
}

// 구조 분해 할당을 사용한 방법
function solution(sides) {
    const [long, a, b] = sides.sort((a,b) => b-a);
    return long < a + b ? 1 : 2
}