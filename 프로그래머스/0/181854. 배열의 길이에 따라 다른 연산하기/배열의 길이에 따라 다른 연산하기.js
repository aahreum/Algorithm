function solution(arr, n) {
    return arr.map((num, idx) => {
        if (arr.length % 2 === 0) {
            return idx % 2 === 0 ? num : num + n;
        } else {
            return idx % 2 === 0 ? num + n : num;
        }
    })
}