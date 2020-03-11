
//To mae it an Async function just write async in front of parenthesis
//When ever we call a async function it always returns a promise even if there is nothing in there

const getTodos=async()=>{
    //Instead of then now we can do the await
    const response=await fetch('todos/todos.json');
    //this await keyword stores JS right here
    //async code itself is non blocking
    //When we call a function somewhere that is not going to block rest of the code
    //This is handled somewhere else in the browser so that some of our code somewhere else can execute
    const data=await response.json();
    // const response=await fetch('todos/todostwo.json');
    // const data=await response.json();
    // console.log(data);
    return data;
    //json method is asynchronous it returns a promise itself
    //we want to return data so when we call this we get access to the data
  //The power of await we could wait for 1 promise to resolve before another then another so it it does each step in 
  //turn
  //Any function with async returns a promise
}
// const todos=getTodos();
// console.log(todos);
console.log(1);
console.log(2);
getTodos()
.then(data =>console.log('Resolved',data))
.catch(err =>console.log('Resolved',err));
console.log(3);
console.log(4);
//Here we see sinces todos is non blocking it is taking some time to execute so it is printing the consoles now
//Async and await achieved it has bundles all aysnc code inside a function
//Its non blokcing so it does not block any synchronous function
//we can chain promises in a much cleaner way one after the other
