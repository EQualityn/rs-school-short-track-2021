function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      result += matrix[j][i];
      if (!matrix[j][i]) {
        break;
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
