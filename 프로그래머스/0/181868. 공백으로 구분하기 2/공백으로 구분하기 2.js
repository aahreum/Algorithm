function solution(my_string) {
    const answer = my_string.split(' ').filter((s) => s !== '');
    return answer;
}