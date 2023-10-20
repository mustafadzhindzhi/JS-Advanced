function printNthElement(arr, steps) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (i % steps === 0) {
      output.push(element);
    }
  }
  return output
}
console.log(printNthElement(["5", "20", "31", "4", "20"], 3));
