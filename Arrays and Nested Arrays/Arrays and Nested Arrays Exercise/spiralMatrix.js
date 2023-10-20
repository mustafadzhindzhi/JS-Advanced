function generateSpiralMatrix(rows, columns) {
    const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));
  
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = columns - 1;
    let direction = 'right';
    let num = 1;
  
    while (num <= rows * columns) {
      if (direction === 'right') {
        for (let i = left; i <= right; i++) {
          matrix[top][i] = num++;
        }
        top++;
        direction = 'down';
      } else if (direction === 'down') {
        for (let i = top; i <= bottom; i++) {
          matrix[i][right] = num++;
        }
        right--;
        direction = 'left';
      } else if (direction === 'left') {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = num++;
        }
        bottom--;
        direction = 'up';
      } else if (direction === 'up') {
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = num++;
        }
        left++;
        direction = 'right';
      }
    }
  
    return matrix;
  }
  
  const spiralMatrix = generateSpiralMatrix(5, 5);
  
  for (let i = 0; i < 5; i++) {
    console.log(spiralMatrix[i].join(' '));
  }