function extractSubsectFromArray(arr) {
    let biggest = Number.MIN_SAFE_INTEGER; 
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        if (currentElement >= biggest) {
            output.push(currentElement);
            biggest = currentElement;
        }
    }
    return output;
}
console.log(extractSubsectFromArray([1,3,8,4,10,12,3,2,24]));
