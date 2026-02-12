function solution(num_list, n) {
    const list = [...num_list]
    const answer = [];
    const length = num_list.length / n;
    
    for (let i = 0; i < length; i++) {
        answer[i] = list.splice(0, n);
    }
    
    return answer;
}