function solution(my_string) {
    const answer = [...my_string].map((item) => {
        if (item === item.toLowerCase()) {
            return item.toUpperCase();
        } else {
            return item.toLowerCase();
        }
    });
    return answer.join('');
}