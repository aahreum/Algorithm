function solution(num_list) {
    return num_list.reduce((acc, curr) => num_list.length >= 11 ? acc + curr : acc * curr);
}