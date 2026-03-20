function solution(score) {
    const averages = score.map(([eng, math]) => (eng + math) / 2);
    const sorted = averages.slice().sort((a, b) => b - a);
    
    return averages.map((avg) => sorted.indexOf(avg) + 1);
}