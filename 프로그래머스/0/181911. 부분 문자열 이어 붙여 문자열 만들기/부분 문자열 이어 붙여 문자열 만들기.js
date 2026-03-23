function solution(my_strings, parts) {
    const answer = [];
    
    for (let i = 0; i < parts.length; i++) {
        const [s, e] = parts[i];
        answer.push(my_strings[i].slice(s, e + 1));
    }
    
    return answer.join('');
}