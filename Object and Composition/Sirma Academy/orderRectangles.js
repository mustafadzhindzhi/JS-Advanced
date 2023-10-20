function orderRectangles(input) {
    function createRectangle(width, height) {
        return {
            width,
            height,
            area() {
                return this.width * this.height;
            },
            compareTo(other) {
                return other.area() - this.area() || other.width - this.width;
            }
        };
    }

    return input.map(([width, height]) => createRectangle(width, height))
                .sort((a, b) => a.compareTo(b));
}

console.log(orderRectangles([[10, 5], [5, 12]]));