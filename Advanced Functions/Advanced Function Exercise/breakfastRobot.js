function solution() {
  const supplies = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
 
  const foodRecipes = {
      apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
      lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
      burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
 
  function cookRecipe(recipe, quantity) {
      const deductedQuantity = {};
 
      for (const value in foodRecipes[recipe]) {
          if (foodRecipes[recipe][value] * quantity > supplies[value]) {
              return `Error: not enough ${value} in stock`;
          }
          deductedQuantity[value] = supplies[value] - foodRecipes[recipe][value] * quantity;
      }
 
      Object.assign(supplies, deductedQuantity);
      return 'Success';
  }
 
  return (str) => {
      const parts = str.split(' ');
      const command = parts[0];
 
      if (command === 'restock') {
          const nutrient = parts[1];
          const quantity = Number(parts[2]);
          supplies[nutrient] += quantity;
          return 'Success';
      }
 
      if (command === 'prepare') {
          const recipe = parts[1];
          const quantity = Number(parts[2]);
          return cookRecipe(recipe, quantity);
      }
 
      return `protein=${supplies.protein} carbohydrate=${supplies.carbohydrate} fat=${supplies.fat} flavour=${supplies.flavour}`;
  };
}

const manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock