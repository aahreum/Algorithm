function solution(participant, completion) {
    const map = {};
    
    participant.forEach((p) => map[p] = (map[p] ?? 0) + 1);
    completion.forEach((c) => map[c]--);
    
    return Object.keys(map).find((key) => map[key] !== 0);
}