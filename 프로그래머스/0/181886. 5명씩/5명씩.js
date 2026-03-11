function solution(names) {
    const answer = [names[0]];
    
    for (let i = 1; i < names.length; i++) {
        if (i % 5 === 0) {
            answer.push(names[i]);
        }
    }
    
    return answer;
}