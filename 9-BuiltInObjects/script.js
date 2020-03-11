
function User(username,email){
    //we can attach properties
    this.username=username;
    this.email=email;
    //we can write a function 
   
    User.prototype.login=function(){
    console.log(`${this.username} has logged in`)
    } 

}
const userOne=new User('tanzim','tanzim67@gmail.com');
const userTwo=new User('Raini','raini@gmail.com');

console.log(userOne,userTwo);
userOne.login();


//If we create any object in JS all of methods wil be inside fade out property
//JS shows us all methods we can in use root level like name.length
//The login method is not inside this prototype we should do smething to define it in prototype
//We want to attach methods to proto property
//every object we create in JS has a proto property
//even user has a prototype
//They contain all methods those type can access
//Dayprototype contains getDay() getMonth()
//Array prototype contains sort() filter()
//All array are store once inside array prototype\
//Proto property doesnt store the methods it lists all available methods
//Proto property for an object will point to object prototype
//Proto property for a date will point to date prototype
//We want to store all methods avaiable to user on User Protype
//Storing objects in prototype has 2 mian benefits
//Its more effecient snce it its tored in one location other than many different locations
//Its gonna help us iwth prototypal experience
