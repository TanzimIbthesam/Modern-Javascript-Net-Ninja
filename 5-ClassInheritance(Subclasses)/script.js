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
//Inheritance 
//since admin class extends User class we get all these methods and properties inherited into the class
class Admin extends User{
deleteUser(user){
    users=users.filter(u=> u.username !== user.username);

}
}

const userOne=new User('tanzim','tanzim67@gmail.com');
const userTwo=new User('Raini','raini@gmail.com');
const userThree=new Admin('Adminone','adminone@email.com');
console.log(userOne,userTwo,userThree);
let users=[userOne,userTwo,userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);
//To access the property 
// console.log(userOne.username,userOne.email);
// console.log(userTwo.username,userTwo.email);
// console.log(userThree.username,userThree.email);
//filter method iterates an array fires a callback function for each method in array and returns eithers true or false
//if we return true it keeps item in array if we return false it deletes the item in array

