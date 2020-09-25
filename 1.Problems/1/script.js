function findMind(numbers =[]) {
    
    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(Math.min(...numbers));
    console.log(Math.max(...numbers));
    
}

findMind( [20,30,70,90]);
//Make a function when you pass parameter as an array and put arguements in array it will sort 

// and this: 7 th task returns the last element of the array, but should
// return as many last ones - as you specify with the second parameter of the
// function

