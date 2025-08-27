function solution(money) {
    const americano = 5500;
    const max = Math.trunc(money / americano);
    const change = money - americano * max;
    return [max, change];
}