function solution(number) {
    const answer = [...number].reduce((acc, curr) => acc + Number(curr), 0) % 9;
    return answer;
}