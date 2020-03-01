//Variable and Block scope
let age=20;

if(true){
    let age=30;
    console.log(`Inside the code block ${age}`);
}
console.log(`Outside the block age is ${age}`);
