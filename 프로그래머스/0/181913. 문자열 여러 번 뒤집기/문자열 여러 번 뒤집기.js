function solution(my_string, queries) {
    const answer = my_string.split('');
    
    for (query of queries) {
        let [s, e] = query;
        
        while (s < e) {
            [answer[s], answer[e]] = [answer[e], answer[s]];
            s++;
            e--;
        }
    }
    
    return answer.join('');
}