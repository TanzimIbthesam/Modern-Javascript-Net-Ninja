//Object literal 

let user={
    name:'Tanzim',
    age:30,
    email:'tanzim67@gmail.com',
    location:'Bangladesh',
    blogs:['Cheese rules','10 things to make with cheese'],
}
console.log(user);
//To access any property inside this object 
console.log(user.name);
user.age=25;
console.log(user.age);
//Alternatively it can be written as
console.log(user['email']);
user['email']='tanzim.ibthesam@gmail.com';
console.log(user['email']);
console.log(user['name']);
//To see its type 
console.log(typeof user);