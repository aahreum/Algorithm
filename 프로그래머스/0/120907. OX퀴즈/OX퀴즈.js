function solution(quiz) {
    const answer = [];

    for (const q of quiz) {
        const [X, op, Y, , Z] = q.split(' ');
        const result = op === '+'
            ? Number(X) + Number(Y)
            : Number(X) - Number(Y);

        answer.push(result === Number(Z) ? 'O' : 'X');
    }

    return answer;
}