function generatePasswords(n, l) {
    for (let i1 = 1; i1 < n; i1++) {
      for (let i2 = 1; i2 < n; i2++) {
        for (let i3 = 'a'.charCodeAt(0); i3 < 'a'.charCodeAt(0) + l; i3++) {
          for (let i4 = 'a'.charCodeAt(0); i4 < 'a'.charCodeAt(0) + l; i4++) {
            for (let i5 = 2; i5 <= n; i5++) {
              if (i5 > i1 && i5 > i2) {
                console.log(`${i1}${i2}${String.fromCharCode(i3)}${String.fromCharCode(i4)}${i5} `);
              }
            }
          }
        }
      }
    }
  }
  
generatePasswords(3,1);
  
  
  
  
  
  