function solution(participant, completion) {
    const obj = {};
    let answer = '';
    
    participant.forEach((item) => {
        obj[item] = (obj[item] ?? 0) + 1;
    })
    
    completion.forEach((item) => {
        obj[item] += 1;
    })
    
    for (key in obj) {
        if (obj[key] % 2 !== 0) {
            return key;
        }
    }
}