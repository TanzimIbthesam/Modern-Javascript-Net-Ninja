const request=new XMLHttpRequest();
//This is what will be used to send a request from the browser
//requets comes loaded with different properties and method 
//The first method we need to use is the open method
//to get the data we need an event listener ready state change 
request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4){
        console.log(request.responseText);
    }
})
//If we want to get some data we make a GET request
request.open('GET','https://jsonplaceholder.typicode.com/todos/');
//To send the request 
request.send();