function solution(sides) {
    let sidesArray = sides.sort((a, b) => a - b);
    if (sidesArray[2] < sidesArray[0] + sidesArray[1]) {
        return 1;
    } else {
        return 2;
    }
}