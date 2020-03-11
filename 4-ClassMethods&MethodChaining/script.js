class User{
constructor(username,email,score){
//set up properties
this.username='Tanzim';
//we can set parameters in the constructor so we can set value from object and we ca get multiple parameters
this.username=username;
this.email=email;
this.score=0;


}
login(){
    console.log(`${this.username} is logged in`);
    return this;
}
logout(){
    console.log(`${this.username} just logged out`);
    return this;
}
inScore(){
    this.score +=1;
    console.log(`${this.username} has an score of ${this.score}`);
    return this;
}
}

const userOne=new User('tanzim','tanzim67@gmail.com');
const userTwo=new User('Raini','raini@gmail.com');
console.log(userOne,userTwo);
//To access the property 
console.log(userOne.username,userOne.email);
console.log(userTwo.username,userTwo.email);
// userOne.login();
// userTwo.login();
// userOne.logout();
// userTwo.logout();
// userOne.inScore();
//we dont define methods inside constructors theyt are just used for defining properties
//we dont comma seperate inide objects
//everytime we create a new class they are going to have access to those methods to those classes
//Method Chaining
//Now we can write 
userOne.login().inScore().inScore().logout();
