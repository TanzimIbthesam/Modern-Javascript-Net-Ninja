const request=new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4 && request.status===200){
        console.log(request,request.responseText);
    }else if(request.readyState===4){
            console.log('Your request cant be fetched');
    }
})
//If we want to get some data we make a GET request
request.open('GET','https://jsonplaceholder.typicode.com/todoss/');
//To send the request 
request.send();