//strings 
console.log('Hello World');
let email='tanzim67@gmail.com';
console.log(email);
//concatenation 
let name='Tanzim';
let emailaddress='tanzim67@gmail.com';
//modern way
console.log(`His name is ${name} and his email is ${emailaddress}`);
//traditional way 
let firstname='Tanzim';
let lastname='Ibthesam';
let fullName=firstname+' '+lastname;
console.log(fullName);
//we can also write
// let fullName=console.log(firstname+' '+lastname);
// fullName;
//getting characters 
console.log(firstname[2]);
//string length 
console.log(fullName.length);
//methods 
console.log(fullName.toUpperCase());
let lowercase=fullName.toLowerCase();
console.log(lowercase);
// let lowercase=console.log(fullName.toLowerCase());
// lowercase;
// console.log(lowercase);
// console.log(lowercase,fullName);
//difference between function an property  .length is a property which helps us to find out something
// toLowerCase is a function cause it is converting or making some change to output of variable
//index 
let index=email.indexOf('@');
console.log(index);