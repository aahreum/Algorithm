function solution(age) {
    const stringAge = String(age);
    const answer = [];
    const alphabetArray = [];
    const startIndex = 'a'.charCodeAt(0);
    const lastIndex = 'z'.charCodeAt(0);

    for (let i = startIndex; i <= lastIndex; i++) {
      alphabetArray.push(String.fromCharCode(i));
    }
    
    for (let i = 0; i < stringAge.length; i++) {
        answer.push(alphabetArray[stringAge[i]]);
    }
    
    return answer.join('');
}