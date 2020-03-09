const addForm=document.querySelector('.add');
//Here we are writing another function since its making our code more reusable when we need we can just invoke this function
const list=document.querySelector('.todos');
const error=document.querySelector('.error');

const todoTemplate=((todo)=>{
const html=`
<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
           </li>
`;
list.innerHTML+=html;
});
console.log(addForm);
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
   
   
    
    if(todo.length){
        todoTemplate(todo);
        addForm.reset();
    }else{
        erroralert=`<div class="alert alert-danger" role="alert">
        Sorry the input field cant be empty
      </div>`;
        error.innerHTML+=erroralert;
        addForm.reset();
      
    }
    
});

list.addEventListener('click',e=>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});
