
function User(username,email){
    //we can attach properties
    this.username=username;
    this.email=email;
    //we can write a function 
   
    User.prototype.login=function(){
    console.log(`${this.username} has logged in`);
      //for method chaining
    return this;
    } 
    User.prototype.logout=function(){
    console.log(`${this.username} has logged out`);
    //for method chaining
    return this;
    } 

}
function Admin(username,email,title){
  //super() called constructor of the parent class
  //call method here is doing task of inheritance
  //In this way we called all property inside User constructor to our Admin
  User.call(this,username,email);
  //Then we can add extra properties inside teh admin function
  this.title=title;
  //Admin can inherit property of user prototype
  Admin.prototype=Object.create(User.prototype);
  //Adding a delete proptype admin can have access to these users wont
  Admin.prototype.deleteUser=function(){
    //delete a user
    //chain of nested properties 
  }

}
const userOne=new User('tanzim','tanzim67@gmail.com');
const userTwo=new User('Raini','raini@gmail.com');
const userThree=new Admin('Tanzim','tanzim67@gmail.com','blackbelt');

console.log(userOne,userTwo,userThree);
userOne.login();
userOne.logout();
userOne.login().logout();


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
