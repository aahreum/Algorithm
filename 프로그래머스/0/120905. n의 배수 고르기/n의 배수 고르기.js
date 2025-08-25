function solution(n, numlist) {
    let answer = numlist.filter((el) => el % n === 0);
    return answer;
}