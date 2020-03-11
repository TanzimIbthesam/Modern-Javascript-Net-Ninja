const fruitsnamesArray=['Apple','Mangoes','Banana'];
console.log(fruitsnamesArray);

const namesSet=new Set(['Apple','Banana','Orange','Pear','Apple']);
// console.log(namesSet);
//Duplicates are not allowed in a set
// const namesSettwo=new Set(fruitsnamesArray);
// console.log(namesSettwo);


// const uniquenames=[...namesSettwo];

const uniquenames=[...new Set(fruitsnamesArray)];

console.log(uniquenames);

const numbers=new Set();
// numbers.add(20);
// numbers.add(30);
// numbers.add(20);
// numbers.add(30);
//To make them chainable 
numbers.add(10).add(20);
numbers.delete(10);
console.log(numbers,numbers.size);
console.log(numbers.has(20),numbers.has(10));
numbers.clear();
console.log(numbers);

const profiles=new Set([
    {name:'Tanzim',age:25},
    {name:'Mark',age:30},
]);
profiles.forEach(profile=>{
console.log(profile.name,profile.age);
});
