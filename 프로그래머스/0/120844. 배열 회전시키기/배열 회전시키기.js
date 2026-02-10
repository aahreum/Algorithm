function solution(numbers, direction) {
    const answer = [...numbers];
    
    if (direction === 'right') {
        answer.unshift(answer.pop());
    } else {
        answer.push(answer.shift());
    }
    
    return answer;
}