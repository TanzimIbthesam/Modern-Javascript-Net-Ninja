 //rest 

// Rest parameter allows us to bundle options inside a single array
const double=(...nums)=>{
console.log(nums);
return nums.map(num=>num*2);
}

const result=double(1,3,5,7,9);
console.log(result);

//spread operator 
const fruits=['Apple','Jam','BlackBerry'];
console.log(...fruits);
const fruitstwo=['Berry','Pie',...fruits];
console.log(fruitstwo);
//spread syntax
const person={name:'Tanzim',age:25};
const newperson={...person,profession:'Web Devloper'};
console.log(newperson);