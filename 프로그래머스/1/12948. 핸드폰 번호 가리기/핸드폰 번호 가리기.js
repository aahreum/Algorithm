function solution(phone_number) {
    const answer = phone_number.replace(/\d(?=\d{4})/g, '*');
    return answer;
}