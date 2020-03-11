//if i want to create new user object 

const userOne={
    username:'Tanzim',
    email:'tanzim67@gmail.com',

    logIn(){
        console.log('The user logged in');
    },
    logOut(){
        console.log('The user logged out');
    }

}
//Not the best practice we are repeating ourselves
const userTwo={
    username:'Mark',
    email:'mark67@gmail.com',

    logIn(){
        console.log('The user logged in');
    },
    logOut(){
        console.log('The user logged out');
    }

}

console.log(userOne.username,userOne.email);
userOne.logIn();
console.log(userTwo.username,userTwo.email);
userTwo.logOut();

//Recommended
// const userThree=new userOne('Tanzim','tanzim67@gmail.com');