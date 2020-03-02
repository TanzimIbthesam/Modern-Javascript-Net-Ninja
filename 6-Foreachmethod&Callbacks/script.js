// const myFunc=(callBackFunc)=>{
//     let value=50;
//     callBackFunc(value);
// }
// myFunc(function(value){
// console.log(value);
// });
//For defining callback function more easy way
// myFunc(value=>{
//     console.log(value);
//     });
let people=["Mario","Chun-li","ryu","luigi"];
// people.forEach(function(person){
// // console.log('Something');
// console.log(person);
// });
//ES6 way
people.forEach((person)=>{
    // console.log('Something');
    console.log(person);
    });
//We can also take a second parameter
people.forEach((person,index)=>{
    // console.log('Something');
    console.log(index,person);
    });
//another way of callback function
const logPerson=(person,index)=>{
    console.log(`${index+1}- hello ${person}`);
}
people.forEach(logPerson);
