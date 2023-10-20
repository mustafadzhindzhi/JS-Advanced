const vectorMath = (function () {
    const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
    const multiply = (a, scalar) => [a[0] * scalar, a[1] * scalar];
    const length = (a) => Math.sqrt(a[0] ** 2 + a[1] ** 2);
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
    const cross = (a, b) => a[0] * b[1] - a[1] * b[0];

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
})();

const vectorA = [3, 4];
const vectorB = [1, 2];

const solution = vectorMath; 

console.log(solution.multiply([3.5, -2], 2)); 