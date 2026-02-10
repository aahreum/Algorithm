function solution(babbling) {
    const can = /aya|ye|woo|ma/g;
    let count = 0;
    
    for (const word of babbling) {
        const remove = word.replace(can, '');
        
        if (remove === '') {
            count++;
        }
    }
    
    return count;
}