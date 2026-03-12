function solution(myString) {
    const answer = myString.split('x').filter((s) => s !== '').sort();
    return answer;
}