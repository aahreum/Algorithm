function solution(myString) {
    const answer = myString.split('x').map((item) => item.length);
    return answer;
}