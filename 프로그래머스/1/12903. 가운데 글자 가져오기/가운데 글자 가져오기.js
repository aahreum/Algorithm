function solution(s) {
    const even = s.length % 2 === 0;
    const index = Math.floor(s.length / 2);
    
    return even ? s.slice(index - 1, index + 1) : s[index];
}