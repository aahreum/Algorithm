function solution(arr, queries) {
    const answer = [...arr];
    
    for (let idx = 0; idx < queries.length; idx++) {
        const [i, j] = queries[idx];
        const save = answer[i];
        answer[i] = answer[j];
        answer[j] = save;
    }
    
    return answer;
}