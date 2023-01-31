function isMagicalMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][0];
  }

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j];
    }
    if (rowSum !== sum) return false;
  }

  for (let i = 0; i < matrix.length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }
    if (colSum !== sum) return false;
  }

  return true;
}
