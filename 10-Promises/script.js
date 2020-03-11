const getTodos = (resource) =>{
    //Instead of callback we will either resolve or reject
    return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();
        request.addEventListener('readystatechange',()=>{
         
            if(request.readyState === 4 && request.status === 200){
                const data=JSON.parse(request.responseText);
         
                resolve(data);
                
                
            }else if(request.readyState === 4){
                   
                   reject('Error get');
                    
            }
        });
        request.open('GET',resource);

        request.send();
    });
    
       
// request.open('GET','https://jsonplaceholder.typicode.com/todos/');

   
};
getTodos('todos/todos.json').then(data=>{
    console.log('Promise resolved',data);
}).catch((err)=>{
console.log('Promise rejected',err);
})

// getTodos('todos/todos.json',(err,data)=>{

// console.log(data);
// getTodos('todos/todostwo.json',(err,data)=>{
// console.log(data);
// });
// getTodos('todos/todosthree.json',(err,data)=>{
//     console.log(data);
//     });


// });
//We got one todos after the another by nesting it inside callback functions
//It would get messy in long run 
//
// const getSomething=()=>{
//     //First step to use new Promise 
//     return new Promise((resolve,reject)=>{
//       resolve('Hello World');
        // reject('Some error');
    // });
    //It can get 2 outcome either a promise can be resolved we can get data or it can be rejected we dont get what we want
    //resolve reject are two functions built into the promise API
    //We automatically reieve these as parameter
    //fetch something
    //promise will either resolve or reject at somepoint
    //
   
// };
//when we resolve something in a promise it fires then function in a method
//if we reject something in a promose it gives us another function
//we either resolve or reject something than fire one of 2 errors
// getSomething().then((data)=>{
//     console.log(data);

// },(err)=>{
// console.log(err);
// });
//Es6 way wrting more precisely 
//If it doesnt resolve it catches the error to resolve the method
// getSomething().then(data=>{
// console.log(data);
// }).catch(err=>{
//     console.log(err);
// });