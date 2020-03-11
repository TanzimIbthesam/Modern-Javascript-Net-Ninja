const getTodos = (callback) =>{
    const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
     
        if(request.readyState === 4 && request.status === 200){
            const data=JSON.parse(request.responseText);
     
            callback(undefined,data);
            
            
        }else if(request.readyState === 4){
               
                callback('Could not fetch data',undefined);
                
        }
    });
       
// request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.open('GET','todos.json');

request.send();
   
};

getTodos((err,data)=>{
console.log('Callback Fired');
console.log(err,data);

if(err){
    console.log(err);
}else{
    console.log(data);
}
});
//JSON-Javascript Object Notation -Data format most APIS return to us when we make requests
// looks like an array with loads of Javascript Objects inside but its not on array its a string
//
//Though it looks like an object it essentially is a string thats how JSON looks like
//When browser exchanges data with string it has to be done in text format 
//
//Figure out how we can take JSOn string we get back and turn into real Javascript object or else it will be difficult to count 
//how many todos in the list and their properties

//number of JS objects 
//There is object built into into JS language through which we can do this
//When we get data instead of passing responseText we are going to take all that JSON and pass into Javascript array of object
//We store it into a const called data then we store in JSOn then we parse
//Parse takes JSON object and converts it into JS objects
//We need to take response text and parse it into Javascript Objects
//Instead of response text in callback parameter we will pass data directly
//When we make a request to some kind of endpoint its serveing us back some kind of endpoint data its getting some kind of JSON from some where
//We see loads of different objects if we want we can cycle through and access
//Its sending JSOn back to us to browser
//When we make our own JSOn we get back our JS array and object 
//Its way of transfering data between server and client







