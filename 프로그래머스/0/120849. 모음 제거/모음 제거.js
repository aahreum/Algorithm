function solution(my_string) {
    const REG = /[aeiou]/g;
    return my_string.replace(REG, '')
}