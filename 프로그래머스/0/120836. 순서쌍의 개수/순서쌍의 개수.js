function solution(n) {
    let answer = 0;
    
    // 풀이 1
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 1; j <= n; j++) {
    //         if (i * j === n) {
    //             answer++;
    //         }
    //     }
    // }
    
    //풀이 2
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer++;
        }
    }
    
    return answer;
}