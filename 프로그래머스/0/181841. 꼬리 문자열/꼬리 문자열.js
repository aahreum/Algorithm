function solution(str_list, ex) {
    const answer = str_list.filter((s) => !s.includes(ex)).join('');
    return answer;
}