const button=document.querySelector('button');
//Add events to a button if a user clicks a button
button.addEventListener('click',()=>{
console.log('Clicked');
});
//To put a cross through all li tags when clicked
const items=document.querySelectorAll('li');
items.forEach(item => {
    //We are attaching an event listener inside collection of items
   item.addEventListener('click',e=>{
      //This is an event log created by the browser for the event that happened
      //e.target tells us which element we clicked
      //we can use item but using e is recommended sice we can use that even we are not cycling and we are using event delegation
      console.log(item);
    //   console.log(e.target);
    //To do that we will use style since we dont know how to delete item from the browser yet
    // e.target.style="text-decoration:line-through red";
    e.target.style.textDecoration="line-through red";
    // e.target.style="color:red";
   });
});