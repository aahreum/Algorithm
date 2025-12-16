function solution(numbers) {
    const sort = numbers.sort((a, b) => a - b);
    const sum = Math.max((sort[0] * sort[1]), (sort[sort.length - 1] * sort[sort.length - 2]))
    return sum;
}