function solution(myString, pat) {
    let string = '';
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'A') {
            string += 'B';
        } else {
            string += 'A';
        }
    }
    
    return +string.includes(pat);
}