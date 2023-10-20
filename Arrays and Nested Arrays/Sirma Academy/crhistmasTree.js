function christmas(n) {
  if (n < 1 || n > 100) {
    console.log('invalid number');
    return;
  };

  let firstLine = " ".repeat(2 * n ) + "|";
  console.log(firstLine);

  for (let i = 0; i < n; i++) {
    let row = "";
    
    for (let j = 0; j < n - i - 1; j++) {
      row += "  ";
    };

    for (let k = 0; k <= i; k++) {
      row += "* ";
    }

    row += "|";

    for (let k = 0; k <= i; k++) {
      row += " *";
    }

    console.log(row);
  }
}
christmas(3);




