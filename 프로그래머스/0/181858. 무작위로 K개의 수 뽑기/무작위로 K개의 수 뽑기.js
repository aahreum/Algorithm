function solution(arr, k) {
    const set = [...new Set(arr)];
    
    return Array.from({ length: k }, (_, i) => set[i] ?? - 1);
}