//fetch api

//A promise would say I would resolve if I would have a success or reject if there is an error
//in fetch api the promise is only ever rejected when we get some sort of network error
//when we mistype a URl we dont get any error 
//however if we expand we get some sort of 404 error

//Main 3 steps we 
//Fetch the Data
//Take the response 
//Return repsonse.json
fetch('todos/todos.json').then((response)=>{
console.log('Resolved',response);

return response.json();
//It gives us a promise that can either get rejected or resolved
}).then(data=>{
console.log(data);
}).catch((err)=>{
console.log('Rejected',err);
});