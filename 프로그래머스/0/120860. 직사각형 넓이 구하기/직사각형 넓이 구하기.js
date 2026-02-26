function solution(dots) {
    const x = dots.map((d) => d[0]);
    const y = dots.map((d) => d[1]);
    
    const width = Math.max(...x) - Math.min(...x);
    const height = Math.max(...y) - Math.min(...y);
    
    return width * height;
}