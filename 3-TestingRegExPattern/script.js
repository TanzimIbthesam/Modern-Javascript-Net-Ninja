
//We want username to be between 6-12 characters only contain upper and lower
//case no special characters
const form=document.querySelector('.sign-up');
// console.log(form);
const feedback=document.querySelector('.feedback');
form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value;
    const usernamePattern=/^[a-zA-Z]{6,12}$/;
    
   

    if(usernamePattern.test(username)){
        //feedback positive info
        // console.log('Regex test passed');
        // feedback.innerHTML+='<h3 style="color:green">Regex test passed<h3>';
        //alternatively we can write
        feedback.textContent='User name valid';
        feedback.style="color:green";
        
    }else{
        //feedback help
        feedback.textContent='Username must be between 6-12 characters and must letters';
        feedback.style="color:red";
       
    }

});