//function declaration
// greet();
// greet();
// greet();
// function greet(){
//     console.log('Hello World');
// }


// function expression-Not hoisted we have to use our expression first before we call that

// const speak=function(){
//     console.log('Hello World');
// }
// speak();
const speak=function(name='Tanzim',time='6:00PM'){
    console.log(`Hello World ${name} ${time}`);
}
speak();
speak('Mario','Morning');
