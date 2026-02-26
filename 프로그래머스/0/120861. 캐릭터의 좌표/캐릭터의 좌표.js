function solution(keyinput, board) {
    let x = 0;
    let y = 0;

    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);

    for (const key of keyinput) {
        if (key === "left" && x > -maxX) x--;
        if (key === "right" && x < maxX) x++;
        if (key === "up" && y < maxY) y++;
        if (key === "down" && y > -maxY) y--;
    }

    return [x, y];
}