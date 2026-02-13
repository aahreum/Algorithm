function solution(n) {
    let index = 1;
    let fact = 1;
    
    while (fact * (index + 1) <= n) {
        index++;
        fact *= index;
    }
    
    return index;
}
