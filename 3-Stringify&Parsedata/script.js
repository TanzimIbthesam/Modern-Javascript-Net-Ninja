const details=[
    {name:'Hills',author:'Micky'},
    {name:'HillsTwo',author:'Micky'},
    {name:'HillsThree',author:'Micky'}


]
//Here we need to convert an js array of objects into JSON

console.log(JSON.stringify(details));
//This stringify is converting array of methods into valdi JSON
localStorage.setItem('details',JSON.stringify(details));

const getitem=localStorage.getItem('details');
//Here we convert a JSOn into an array
console.log(JSON.parse(getitem));
