function solution(array) {
    const map = {};
    
    for (let num of array) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    
    const values = Object.values(map);
    const max = Math.max(...values);
    const maxCount = values.filter((v) => v === max).length;
    
    if (maxCount > 1) {
        return -1;
    }
    
    for (let key in map) {
        if (map[key] === max) {
            return Number(key);
        }
    }
    
    
}