const getTodos = (resource,callback) =>{
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
request.open('GET',resource);

request.send();
   
};

getTodos('todos/todos.json',(err,data)=>{

console.log(data);
getTodos('todos/todostwo.json',(err,data)=>{
console.log(data);
});
getTodos('todos/todosthree.json',(err,data)=>{
    console.log(data);
    });


});
//Here we have one json data what if we have multriple JSON files
//datas
//we have 3 json files what if we want to get each one in turn
//we request first one and we wait until we get data in turn of first one similarly in case of second one
//We get first one than we output the first one to the browser
//Its quiet common when we request datas from one APIS after getting that data from API need requests to get data from another API
//We know we have data or an error we know first one is complete
//THis is URL or endpoint 
//We need to pass through another parameter which is resource
//Its pretty messy doing one callback after the other its called calback hell it becomes very messy