function solution(my_string) {
    const number = my_string.replace(/[a-z]/gi, '');
    return [...number].reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);
}