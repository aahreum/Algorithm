function solution(my_string) {
    let answer = [...my_string].filter((el) => Number.isInteger(Number(el)));
    return answer.map(Number).sort();
}