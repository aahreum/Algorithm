function solution(array, n) {
    let answer = array.filter((el) => el === n).length;
    return answer;
}