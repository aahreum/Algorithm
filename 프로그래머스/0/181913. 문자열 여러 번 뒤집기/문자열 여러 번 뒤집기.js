function solution(my_string, queries) {
    const answer = my_string.split('');
    
    for (query of queries) {
        const [s, e] = query;
        
        let left = s;
        let right = e;
        
        while (left < right) {
            [answer[left], answer[right]] = [answer[right], answer[left]];
            left++;
            right--;
        }
    }
    
    return answer.join('');
}