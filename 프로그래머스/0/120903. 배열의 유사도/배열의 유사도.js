function solution(s1, s2) {
    let array = [...s1, ...s2];
    let set = new Set(array);
    return array.length - set.size;
}