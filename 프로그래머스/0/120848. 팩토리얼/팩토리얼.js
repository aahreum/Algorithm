function factorial(number) {
  let result = 1;
    
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
    
  return result;
}

function solution(n) {
    let index = 1;
    let prev = 1;
    let curr = 1;
    
    while (true) {
        prev = factorial(index);
        index++;
        curr = factorial(index);
        if (curr > n) {
            break;
        }
    }
    
    return index - 1;
}