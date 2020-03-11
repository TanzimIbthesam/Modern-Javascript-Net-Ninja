// store data in local storage 
localStorage.setItem('name','Tanzim');
localStorage.setItem('age',50);

//get data from local storage
 let name=localStorage.getItem('name');
 let age=localStorage.getItem('age');
console.log(name,age);


 localStorage.setItem('name','Luigi');
// Update using dot notation
localStorage.age='25';


 name=localStorage.getItem('name');
 age=localStorage.getItem('age');
 console.log(name,age);

 //Deleting methods from local storage 

//  name=localStorage.removeItem('name');
//  console.log(name);

 //To delete all items in local Storage
 localStorage.clear();
 
 name=localStorage.getItem('name');
 age=localStorage.getItem('age');
 console.log(name,age);




