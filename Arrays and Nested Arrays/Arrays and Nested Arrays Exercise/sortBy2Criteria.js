function sortArrayByTwoCriteria(arr) {
    const sortedArr = arr.sort((a, b) => {
        const firstCrieteria = a.length - b.length;
        const secondCriteria = a.localeCompare(b);
        return firstCrieteria || secondCriteria;
    });
    console.log(sortedArr.join("\n"));
}
sortArrayByTwoCriteria(['alpha', 'beta', 'gamma'])