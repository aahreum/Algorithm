function solution(my_string) {
    const array = my_string.split(' ');
    let answer = Number(array[0]);
    
    for (let i = 1; i < array.length; i += 2) {
        const operator = array[i];
        const num = Number(array[i + 1]);

        if (operator === '+') {
            answer += num;
        } else {
            answer -= num;
        }
    }
    
    return answer;
}