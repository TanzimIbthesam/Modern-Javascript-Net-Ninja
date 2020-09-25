function Randomone(length_of_array) {
    let uppervalue = 500;
    let lowervalue = 0;
    let randomnum = Math.floor(Math.random() * (uppervalue - lowervalue + 1) + lowervalue);
    // // randArray(arr);
    // console.log(arr);
    const randomArray = []
    for (let i = 0; i < length_of_array; i++) {
        randomArray.push(randomnum);
    }
    console.log(randomArray);
}
Randomone(4);