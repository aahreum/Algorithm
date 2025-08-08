function solution(n, k) {
    let answer = 0;
    
    let lamb = 12000;
    let drink = 2000;
    let service = Math.trunc(n / 10);
    
    answer = n * lamb + (k - service) * drink
    
    return answer;
}