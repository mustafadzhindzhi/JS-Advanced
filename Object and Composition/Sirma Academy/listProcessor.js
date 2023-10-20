function solve(commands) {
    let listProcessor = (function () {
        let arr = [];
        return {
            add: function (str) {
                arr.push(str);
            },
            remove: function (str) {
                arr = arr.filter(e => e !== str);
            },
            print: function () {
                console.log(arr.join(','));
            }
        };
    })();

    for (let command of commands) {
        [cmdName, arg] = command.split(' ');
        listProcessor[cmdName](arg);
    }
}

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);