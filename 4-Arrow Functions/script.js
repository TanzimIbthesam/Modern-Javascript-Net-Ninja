//regular function
// const calArea=function(radius){
//      let area=3.14 * radius **2;
//      return area;
//     we can also write
//     return 3.14 * radius **2;
//     }
//     const cal=calArea(5);
//     console.log(cal);
//Fat Arrow
// const calArea=(radius)=>{
//     return 3.14 * radius **2;
// }
// const cal=calArea(5);
// console.log(cal);
//More simplified way
// const calArea=radius=>{
//     return 3.14 * radius **2;
// }
// const cal=calArea(5);
// console.log(cal);
//If we have 2 parameters we need the parenthesis when we also have no parameter we need parenthesis
// const calArea=(radius,secondparameter)=>{
//     return 3.14 * radius **2;
    
// }
// const cal=calArea(5,'SecondParameter');
// console.log(cal);
//calArea
//More easier way
const calcArea=radius=>3.14 * radius **2;
const area=calcArea(5);
console.log(`Area is ${area}`);
//In case of two parameters
const profile=(name,age)=>{
    return `${name} and ${age}`;
}
// profile('Tanzim',25);
const profileparam=profile('Tanzim',25);
console.log(profileparam);
//When there is no math most easiest way
const profiledetails=(name,age)=>{
    console.log(`${name} and ${age}`);
}
profiledetails('Tanzim',25);

// const greet=function(){
//     console.log('Hello World');
// }
// greet();
// convert the above function into fat arrow function
const greet=()=>console.log('Hello World');
greet();
//another way 
// const greet=()=>'Hello';
// const result=greet();
// console.log(result);



