function solution(arr) {
    const answer = arr.reduce((acc, curr) => acc + curr , 0) / arr.length;
    return answer;
}