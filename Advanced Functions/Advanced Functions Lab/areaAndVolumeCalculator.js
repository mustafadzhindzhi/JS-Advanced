function areaAndVolumeCalculator(area, vol, input) {
    const points = JSON.parse(input);
    const result = [];

    for (const point of points) {
        result.push({
            area: area.call(point),
            volume: vol.call(point),
        });
    }

    return result;
}



function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(areaAndVolumeCalculator(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
));