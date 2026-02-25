function solution(my_str, n) {
    const answer = [];
    const array = [...my_str];
    
    while (array.length > 0) {
        answer.push(array.splice(0, n).join(''))
    }
       
    return answer;
}