function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            };
        },

        hasAudio(car) {
            car.currentTrack = null;
            car.nowPlaying = function () {
                if (this.currentTrack) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },

        hasParktronic(car) {
            car.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        }
    };
}

const assemblyLineCar = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLineCar.hasClima(myCar);
console.log(myCar.temp);

myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLineCar.hasAudio(myCar);

myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};

myCar.nowPlaying();

assemblyLineCar.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);