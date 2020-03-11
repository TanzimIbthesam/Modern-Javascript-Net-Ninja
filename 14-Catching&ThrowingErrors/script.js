


const getTodos=async()=>{
    //Instead of then now we can do the await
    const response=await fetch('todos/todoooos.json');
    if(response.status !== 200){
      //if we want to throw our own error
      //When we throw an error inside an Asynchronous function the promise is rejected
      throw new Error('Data not being able to fetch');
    }
   
    const data=await response.json();
   
    return data;
  
}
// const todos=getTodos();
// console.log(todos);
console.log(1);
console.log(2);
getTodos()
.then(data =>console.log('Resolved',data))
.catch(err =>console.log('Resolved',err.message));
console.log(3);
console.log(4);

