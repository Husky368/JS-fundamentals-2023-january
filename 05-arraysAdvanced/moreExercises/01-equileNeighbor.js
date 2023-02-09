function equileNeighbor(declaration) {
    let resultNum = 0
    for (line = 0; line < declaration.length; line++) {
        if (declaration[line].length > 0) {
            for (row = 1; row < declaration[line].length; row++) {
                if (declaration[line][row - 1] === declaration[line][row]) {
                    resultNum++
                }
            }
        }
    }
    for (row = 1; row < declaration[line].length; row++) {
        for (line = 0; line < declaration.length; line++) {
             
        }
    }
    console.log(resultNum)
}
