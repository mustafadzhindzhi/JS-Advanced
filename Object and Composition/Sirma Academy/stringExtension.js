(function () {
    String.prototype.ensureStart = function (substring) {
        return this.startsWith(substring) ? this.toString() : `${substring}${this}`;
    };

    String.prototype.ensureEnd = function (substring) {
        return this.endsWith(substring) ? this.toString() : `${this}${substring}`;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (n >= this.length) {
            return this.toString();
        }

        const substring = this.substr(0, n - 3);
        const lastSpaceIndex = substring.lastIndexOf(' ');

        return lastSpaceIndex !== -1 ? `${substring.substr(0, lastSpaceIndex)}...` : `${substring}...`;
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(new RegExp(`\\{${i}\\}`, 'g'), params[i]);
        }
        return string;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
})();

let str = 'my string'
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');
console.log(str);