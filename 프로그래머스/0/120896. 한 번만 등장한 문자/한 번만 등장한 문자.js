function solution(string) {
    const count = {};
    
    for (let s of string) {
        count[s] = (count[s] || 0) + 1; 
    }
    
    return Object.keys(count).filter((k) => count[k] === 1).sort().join('');
}