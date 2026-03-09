function solution(my_string) {
    const answer = my_string.split(/[a-zA-Z]/g).filter((item) => item !== '').reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}