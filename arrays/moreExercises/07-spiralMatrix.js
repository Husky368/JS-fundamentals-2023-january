function generateSpiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    let number = 1;
    let rowStart = 0;
    let rowEnd = rows - 1;
    let colStart = 0;
    let colEnd = cols - 1;

    while (number <= rows * cols) {
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = number;
            number++;
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = number;
            number++;
        }
        colEnd--;

        for (let i = colEnd; i >= colStart; i--) {
            matrix[rowEnd][i] = number;
            number++;
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {
            matrix[i][colStart] = number;
            number++;
        }
        colStart++;
    }

    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(" "));
    }
}
