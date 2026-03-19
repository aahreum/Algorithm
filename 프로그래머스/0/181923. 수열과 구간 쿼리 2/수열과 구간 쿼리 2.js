function solution(arr, queries) {
    const answer = [];
    
    for (const [s, e, k] of queries) {
        let min = Infinity;
        
        for (let i = s; i <= e; i++) {
            const curr = arr[i];
            
            if (curr > k && curr < min) {
                min = curr;
            }
        }
        
        answer.push(min === Infinity ? -1 : min);
    }
    
    return answer;
}