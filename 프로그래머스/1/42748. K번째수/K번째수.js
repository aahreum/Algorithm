function solution(array, commands) {
    const answer = [];
    
    for (let idx = 0; idx < commands.length; idx++) {
        const [i, j, k] = commands[idx];
        const arr = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(arr[k - 1]);
    }
    
    return answer;
}