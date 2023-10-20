function stairs(n) {
    for (let i = 1; i <= n; i++) {
        // Calculate the number of spaces needed before each line
        let spaces;
        if (i <= 2) {
            spaces = '';
        } else if (i === 3) {
            spaces = ' ';
        } else {
            spaces = ' '.repeat(2 * (i - 3) + 1); // Increment spaces by 2
        }

        // Create the string of hashes for the current line
        let hashes = '#'.repeat(i);

        // Print the spaces and hashes
        console.log(spaces + hashes);
    }
}

stairs(4);

