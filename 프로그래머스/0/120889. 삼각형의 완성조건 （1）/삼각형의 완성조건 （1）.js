function solution(sides) {
    // sort는 원본 배열을 변경함 만약 원본 배열을 변경하고 싶지 않다면 얕은 복사로 배열을 복사해야함
    sides.sort((a, b) => a - b);
    if (sides[0] + sides[1] > sides[2]) {
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