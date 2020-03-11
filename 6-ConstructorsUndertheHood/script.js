// class User{
// constructor(username,email,score){
// //set up properties
// this.username='Tanzim';
// //we can set parameters in the constructor so we can set value from object and we ca get multiple parameters
// this.username=username;
// this.email=email;
// this.score=0;


// }


// }
//Inheritance 
//since admin class extends User class we get all these methods and properties inherited into the class

//older way we created objects using the class
//we create constructor function to create a new object without using a class
//types of code lives under abstraction
//
function User(username,email){
    //we can attach properties
    this.username=username;
    this.email=email;
    //we can write a function 
    this.login=function(){
        console.log(`${this.username} has logged in`);
    }

}
const userOne=new User('tanzim','tanzim67@gmail.com');
const userTwo=new User('Raini','raini@gmail.com');

console.log(userOne,userTwo);
userOne.login();
userTwo.login();

// class layer is a thin layer of abstraction towards the prortype model which is being used under the hood to create objects when we use classes

