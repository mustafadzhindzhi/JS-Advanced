function solve() {
   const textareaElement = document.querySelector('#inputs textarea');
   const text = JSON.parse(textareaElement.value);
   const restaurants = {};

   for (const line of text) {
       const [restName, workersInfo] = line.split(' - ');
       const workers = workersInfo.split(', ').map(worker => {
           const [name, salary] = worker.split(' ');
           return { name, salary: Number(salary) };
       });

       if (!restaurants[restName]) {
           restaurants[restName] = [];
       }

       restaurants[restName].push(...workers);
   }

   let bestRestaurant = '';
   let highestAvgSalary = -Infinity;

   for (const [restaurant, workers] of Object.entries(restaurants)) {
       const totalSalary = workers.reduce((sum, worker) => sum + worker.salary, 0);
       const avgSalary = totalSalary / workers.length;

       if (avgSalary > highestAvgSalary) {
           highestAvgSalary = avgSalary;
           bestRestaurant = restaurant;
       }
   }

   const sortedWorkers = restaurants[bestRestaurant].sort((a, b) => b.salary - a.salary);
   const bestRestaurantInfo = `Name: ${bestRestaurant} Average Salary: ${highestAvgSalary.toFixed(2)} Best Salary: ${sortedWorkers[0].salary.toFixed(2)}`;
   const workersData = sortedWorkers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');

   document.querySelector('#bestRestaurant p').textContent = bestRestaurantInfo;
   document.querySelector('#workers p').textContent = workersData;
}