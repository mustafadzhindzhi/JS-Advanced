function listProcessor(array) {
    const result = [];

    const commands = {
        add(string) {
            result.push(string);
        },

        remove(string) {
            while (result.includes(string)) {
                const index = result.indexOf(string);
                result.splice(index, 1);
            }
        },

        print() {
            console.log(result.join(','));
        }
    };

    array.forEach(line => {
        const [command, word] = line.split(' ');

        commands[command](word);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);