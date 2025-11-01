function solution(num_list) {
    let mul = num_list.reduce((acc, curr) => {
        return acc * curr
    }, 1);
    const sum = num_list.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return mul < sum ** 2 ? 1 : 0;
}