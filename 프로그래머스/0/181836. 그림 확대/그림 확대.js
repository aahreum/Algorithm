function solution(picture, k) {
    const answer = [];
    
    for (const pic of picture) {
        const row = [...pic].map((p) => p.repeat(k)).join('');
        
        for (let i = 0; i < k; i++) {
            answer.push(row);
        }
    }
    
    return answer;
}