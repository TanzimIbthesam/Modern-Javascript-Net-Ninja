

function findduplicates(nums = []) {
    // let nums = [40, 50, 60, 70];
    let duplicatenums = nums.filter((index, value) => {
        return nums.indexOf(index) != value;
    });
    console.log(duplicatenums);
    if (duplicatenums.length) {
        console.log('It has duplicates all values are not unique');
    } else {
        console.log('All values are unique');
    }
    let numset = new Set(nums);
    console.log(numset);
}
findduplicates([40, 50, 60, 70, 70]);