function combinedHourglassPattern(n) {
  let pattern = "";

  // Create the upper part of the hourglass
  for (let i = 0; i < n + 2; i++) {
    pattern += "#";
  }
  pattern += "\n";

  for (let i = 2; i <= n - 4; i++) {
    // Add spaces before the first "#"
    for (let space = 1; space < i; space++) {
      pattern += " ";
    }
    // Add stars and spaces to the pattern
    for (let star = 0; star <= n + 1; star++) {
      if (star === 0 || star === (n + 3) - 2 * i) {
        pattern += "#";
      } else {
        pattern += " ";
      }
    }
    // Add spaces after the last "#"
    for (let space = 1; space <= i; space++) {
      pattern += " ";
    }
    // Move to the next row
    pattern += "\n";
  }

  // Create the lower part of the hourglass
  for (let i = n - 3; i >= 2; i--) {
    // Add spaces before the first "#"
    for (let space = 1; space < i; space++) {
      pattern += " ";
    }

    for (let star = 0; star <= n + 1; star++) {
      if (star === 0 || star === (n + 3) - 2 * i) {
        pattern += "#";
      } else {
        pattern += " ";
      }
    }

    for (let space = 1; space <= i; space++) {
      pattern += " ";
    }

    pattern += "\n";
  }

  // Add the last line with all "#"
  for (let i = 0; i < n + 2; i++) {
    pattern += "#";
  }
  pattern += "\n";

  console.log(pattern);
}

combinedHourglassPattern(8);



