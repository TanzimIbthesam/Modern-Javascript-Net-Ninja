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
    constructor(username,email,title){
        super(username,email);
        //through super we can inherit properties of User as well as add new properties
        this.title=title;
    }
deleteUser(user){
    users=users.filter(u=> u.username !== user.username);
    return this;

}
}

const userOne=new User('tanzim','tanzim67@gmail.com');
const userTwo=new User('Raini','raini@gmail.com');
const userThree=new Admin('Adminone','adminone@email.com','black-belt-Js');
console.log(userThree);
console.log(userOne,userTwo,userThree);
let users=[userOne,userTwo,userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);
//what if we only want admins to have additional properties
//we need to define own constructor insode the admin class
//Admin win run constructor inside the constructor class 
