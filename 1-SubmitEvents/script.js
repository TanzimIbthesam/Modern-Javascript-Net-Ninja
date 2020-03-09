//we dont add add event listener to input type submit 
//cause at the end of the day its not the event thats being submitted its the form
const form=document.querySelector('.sign-up');
//if we attach a submit event instead of click it will submit the form instead of clicking it
//when we attach submit event by default the page refreshes
//const user=document.querySelector('#username');
// console.log(user);
form.addEventListener('submit',e=>{
    //we want to handle submit event in our own way not in default way of our browser
    //it prevents default method of a particular event it does not refresh the page
    e.preventDefault();
    //if want to get the avlue inside the form field we can write 
    // console.log(user.value);
    //We dont have to select a query selector for the input field if we have one for the form
    //if we have id 
    //we can get field notation for the forms using .notation and the id
    //instead of id even if we use the name we are going to get the same result
    
    console.log(form.username.value);

});