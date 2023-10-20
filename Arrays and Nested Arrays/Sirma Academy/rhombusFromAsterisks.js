function rhombFromAsterisks(n) {
    let str = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str += "* ";
    }
    str += "\n";
  };
  //Downside pyramid
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let k = 0; k < n - i; k++) {
      str += "* ";
    }
    str += "\n";
  }
  console.log(str);
};

rhombFromAsterisks(3);

