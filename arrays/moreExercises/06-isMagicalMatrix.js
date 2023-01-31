function isMagicalMatrix(matrix) {
    let example = 0
    let magic = true
    for (i = 0; i < matrix[0].length; i++) {
        example += matrix[0][i]
    }
    for (i = 0; i < matrix.length; i++) {
        let row = 0
        for (k = 0; k < matrix.length; k++) {
            row += Number(matrix[i][k])
        }
        if (row != example) {
            magic = false
        }
    }
    for (i = 0; i < matrix.length; i++) {
        let col = 0
        for (k = 0; k < matrix.length; k++) {
            col += Number(matrix[k][i])
        }
        if (col != example) {
            magic = false
        }
    }
    console.log(magic)
}
