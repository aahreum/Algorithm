function solution(strArr) {
    const answer = [];
    
    for (const s of strArr) {
        if (!s.includes('ad')) {
            answer.push(s);
        }
    }
    
    return answer;
}