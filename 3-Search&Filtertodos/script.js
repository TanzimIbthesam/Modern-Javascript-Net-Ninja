const addForm=document.querySelector('.add');
//Here we are writing another function since its making our code more reusable when we need we can just invoke this function
const list=document.querySelector('.todos');
const error=document.querySelector('.error');
const search=document.querySelector('.search input');
console.log(search);

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
//delete todos
list.addEventListener('click',e=>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});
//search
const TodoFiltered=term=>{
Array.from(list.children)
.filter((todo)=>!todo.textContent.toLowerCase().includes(term))
.forEach(todo =>todo.classList.add('filtered'));
Array.from(list.children)
.filter((todo)=>todo.textContent.includes(term))
.forEach(todo =>todo.classList.remove('filtered'));
// return true;
// console.log(todo.textContent);
// return true;)
//Refactored code 



};
search.addEventListener('keyup',()=>{
const term=search.value.trim().toLowerCase();
TodoFiltered(term);

});
