class User{
constructor(username,email){
//set up properties
this.username='Tanzim';
//we can set parameters in the constructor so we can set value from object and we ca get multiple parameters
this.username=username;
this.email=email;
}
}
const userOne=new User('tanzim','tanzim67@gmail.com');
const userTwo=new User('Raini','raini@gmail.com');
console.log(userOne,userTwo);
//To access the property 
console.log(userOne.username,userOne.email);
console.log(userTwo.username,userTwo.email);
//constructor function is something that sets 
//or constructs or object or sets the property on it 
//it sets all properties on user object

//the new keyword
//1.It creates an empty object
//2.it binds value of this to an empty object
//3.It calls the constructor function to build the object inside the class

//when we are creating an object we are creating an instance of the original class