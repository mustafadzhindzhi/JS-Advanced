function equalSumsDiagonals(matrixStrings) {
    const matrix = matrixStrings.map(row => row.split(' ').map(Number));
  
    function getMainDiagonalSum(matrix) {
      let sum = 0;
      for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
      }
      return sum;
    }
  
    function getAntiDiagonalSum(matrix) {
      let sum = 0;
      for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][matrix.length - 1 - i];
      }
      return sum;
    }
  
    const mainDiagonalSum = getMainDiagonalSum(matrix);
    const antiDiagonalSum = getAntiDiagonalSum(matrix);
  
    if (mainDiagonalSum === antiDiagonalSum) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (i !== j && i !== matrix.length - 1 - j) {
            matrix[i][j] = mainDiagonalSum;
          }
        }
      }
    }
  
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join(' '));
    }
  }
  
  const inputMatrix = ['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1']
  
  equalSumsDiagonals(inputMatrix);