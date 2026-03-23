function solution(my_string, s, e) {
    const arr = my_string.split('');
    
    let left = s;
    let right = e;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        
        left++;
        right--;
    }
    
    return arr.join('');
}