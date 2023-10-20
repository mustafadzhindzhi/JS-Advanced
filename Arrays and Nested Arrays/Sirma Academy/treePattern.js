function arrowPattern(n) {
    arrowHead(n);
    arrowBody(n);
};

function arrowHead(n) {
    let str = "";
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= n - i - 1; j++) {
            str += " "
        };
        for (let k = 0; k < i; k++) {
            str += "* "
        }
        console.log(str);
        str = ''
    };
};

function arrowBody(n) {
    let str = "";
    let item = n % 2 === 0 ? n - 1 : n - 2; 

    for (let i = 1; i < n; i++) {
        for (let j = n % 2 === 0 ? 1 : 0; j <= n / 2; j++) {
            str += " "
        };
        for (let j = 1; j <= item; j++) {
            str += "*";
        };
        console.log(str);
        str = "";
    }
}

arrowPattern(7)