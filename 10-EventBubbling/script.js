const ul=document.querySelector('ul');
const button=document.querySelector('button');



button.addEventListener('click',()=>{
// ul.innerHTML+='<li>Something New</li>';
//Alternative way is yo crate an element 

const li=document.createElement('li');
li.textContent='Something new to do';

//We need to either append or prepend
//If we append an element it will add a new item on bottom of existing elements
// ul.append(li);
//If we preprend it will add existing items on top of the elements
ul.prepend(li);

});
// const items=document.querySelectorAll('li');
// items.forEach(item => {
//     //We are attaching an event listener inside collection of items
//    item.addEventListener('click',e=>{
      
    
//       console.log('event in LI');
//       //To stop an event from bubbling up we use stop propagation and it stops the event bubbling up
//       e.stopPropagation();
   
//     e.target.remove();
//    });
// });
ul.addEventListener('click',e=>{
   // console.log('event in UL');
   // Here we have to find out what thing was initially clicked
   
   //we dont have an event listener attached to li this event 
   console.log(e.target);
   // e.target.remove();
   //now we see when we add something and remove the li bubbles up and we see which li tag was clicked it doesnt matter if new li atgs doesnt have event listeners we are doing all with one event listener
   //if we click on li tag it will remove 
   if(e.target.tagName==='LI'){
      e.target.remove();
   }

   });
//Event bubbling 
//when an event occurs that example the event tag example li.Js will look if we have any event listeners attached to this element. It fires that callback function to that if there is any event listener attached to that.That event bubbles up the DOm to its parent which in this case is the ul
//then that event bubbles up and it goes to next parent to see if any event bubbls up
//event starts at event bubbles and starts going up the Dom to see if there is anything attached to it
//lets take a case of ul
