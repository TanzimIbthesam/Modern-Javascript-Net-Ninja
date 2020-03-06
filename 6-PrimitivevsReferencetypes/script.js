//Primitive types-numbers,strings,Booleans,null,undefined,symbols
//Reference types-object literals,arrays,functions,dates,all other objects
//When we create a new number and store it inside a variable its called a stack.Place inide stack quite limited Reference type are stored on heap which is much slower
// let scoreOne=50;
// let scoreTwo=scoreOne;
// scoreOne=75;
// console.log(`Score one is ${scoreOne} and score two is ${scoreTwo}`);

let scoreOne={name:'Tanzim',age:50};
scoreTwo=scoreOne;
scoreOne.age=60;
console.log(scoreOne,scoreTwo);

