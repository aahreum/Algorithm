function solution(num_str) {
    const answer = [...num_str].reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}