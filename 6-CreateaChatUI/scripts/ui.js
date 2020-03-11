//render chat templates to the DOM 

//clear the list of chat when room changes
class ChatUI{
    constructor(list){
        //we are atoring the list on a property inside a class bacause when we render a template to a DOM 
        //we have reference to a list on the DOM
        this.list=list;
    }
    render(data){
     const html=`
     <li class="list-group-item">
     <span class="username">${data.username}</span>
     <span class="message">${data.message}</span>
     <div class="time">${data.created_at.toDate()}</div>
    
     </li>
     `;
     this.list.innerHTML+=html;
    }
     //it is a single chat object and it has a single username property on it
    //render will create a html snippet for each document we get back and render it back to DOM
    // we will get data nad that will be a single chat object
}