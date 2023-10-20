function newBuilding(floors, rooms) {
    for (let i = floors; i > 0; i--) {
        let template = "";
        let type = i === floors ? "L" : i % 2 ? "A" : "O";

        for (let j = 0; j < rooms; j++) {
            template += `${type}${i}${j} `;
        };
        console.log(template);
    }
}

newBuilding(6, 4)