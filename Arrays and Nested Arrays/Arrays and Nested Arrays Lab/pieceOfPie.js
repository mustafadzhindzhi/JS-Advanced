function pieceOfPie(pies, firstTarget, secondTarget) {
    const indexOfFirstTarget = pies.indexOf(firstTarget);
    const indexOfSecondTarget = pies.indexOf(secondTarget);
    
    const result = pies.slice(indexOfFirstTarget, indexOfSecondTarget + 1);

    return result;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
console.log('----------------------------------');
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);