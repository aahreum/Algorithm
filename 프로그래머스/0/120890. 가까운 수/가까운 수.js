function solution(array, n) {
    let answer = array[0];
    
    for (let i = 1; i < array.length; i++) {
        const currentDiff = Math.abs(n - array[i]);
        const answerDiff = Math.abs(answer - n);
        
        if (currentDiff < answerDiff || (currentDiff === answerDiff && array[i] < answer)) {
            answer = array[i];
        }
    }
    
    return answer;
}