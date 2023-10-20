function extractParenthesizedText(targetElementId) {
    const targetElement = document.getElementById(targetElementId);
  
    if (targetElement) {
      const text = targetElement.textContent;
      const matches = text.match(/\(([^)]+)\)/g);
  
      if (matches) {
        const extractedContent = matches.map(match => match.slice(1, -1)).join('; ');
        document.getElementById('result').textContent = extractedContent;
      } else {
        document.getElementById('result').textContent = "No parenthesized text found.";
      }
    } else {
      document.getElementById('result').textContent = "Element not found.";
    }
  }