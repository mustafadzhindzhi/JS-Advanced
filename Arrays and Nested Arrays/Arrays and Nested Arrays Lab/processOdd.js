function processOdd(arr) {
  let result = arr
    .filter((x, i) => i % 2 === 1)
    .map((x) => x * 2)
    .reverse()
    .join(" "); 
  console.log(result);
}
processOdd([10, 15, 20, 25]);
