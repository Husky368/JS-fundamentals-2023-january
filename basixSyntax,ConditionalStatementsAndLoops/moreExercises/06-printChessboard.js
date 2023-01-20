function printChessboard(n) {
    let chessboard = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            if ((row + col) % 2 === 0) {
                chessboard += " ";
            } else {
                chessboard += "#";
            }
        }
        chessboard += "\n";
    }
    return chessboard;
}
