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
//Much more smoother way than callbecak hell
getTodos('todos/todos.json').then(data=>{
console.log('Promise 1 resolved',data);
return getTodos('todos/todostwo.json');
}).then(data=>{
console.log('Promise 2 resolved',data);
return getTodos('todos/todosthree.json')
.then(data=>{
 console.log('Promise 3 resolved',data);
return getTodos('todos/todosfour.json')
.then(data=>{
console.log('Promise 4 resolved',data);
});
});
   
})
.catch((err)=>{
console.log('Promise rejected',err);
})

//Promise chaining 
//Return means the whole thing now has promise of parent 
//then data fires when based on that function
//Good thing about catch is it catches based on any specific error