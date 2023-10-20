function biggestElement(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if (largest <= arr[i][j]){ 
        largest = arr[i][j];
      }
    }
  }
  return largest;
}
console.log(
  biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);
