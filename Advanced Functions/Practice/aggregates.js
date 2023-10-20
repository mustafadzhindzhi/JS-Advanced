function aggregate(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    let product = 1;
    let join = '';

    for (const num of arr) {
        sum += num;
        min = Math.min(min, num);
        max = Math.max(max, num);
        product *= num;
        join += num;
    }

    console.log('Sum = ' + sum);
    console.log('Min = ' + min);
    console.log('Max = ' + max);
    console.log('Product = ' + product);
    console.log('Join = ' + join);
}

const myArr = [5, -3, 20, 7, 0.5];
aggregate(myArr);