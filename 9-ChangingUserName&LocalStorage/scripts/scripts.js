
//This is where we will start to initialize our application
//DOM queries
const chatlist=document.querySelector('.chat-list');
const newChat=document.querySelector('.new-chat');
const newForm=document.querySelector('.new-name');
const updateMessage=document.querySelector('.update-mssg');
console.log(updateMessage);

//Add a new chat
newChat.addEventListener('submit',e=>{
e.preventDefault();
const message=newChat.message.value.trim();
chatroom.addChat(message)
.then(()=>newChat.reset())
.catch(err=>console.log(err));
//we can use chatrrom as we have instantiated the class below
});
//update username
newForm.addEventListener('submit',e=>{
e.preventDefault();
//update name via the chatroom
const newName=newForm.name.value.trim();
chatroom.updateName(newName);
//reset the form
newForm.reset();
//show then hide the update message
updateMessage.innerText=`Your name was updated to ${newName}`;
setTimeout(()=>
updateMessage.innerText='',3000
);
});
//check local storage for a name
const username=localStorage.username ? localStorage.username : 'anonamynous';
//class instances
const chatUI=new ChatUI(chatlist);
// const chatroom=new Chatroom('music','Tanzim');
const chatroom=new Chatroom('music',username);
//get chats and render
//we are only lstening to chatrroms where room is music
chatroom.getChats(data=>chatUI.render(data));
//everytime when it refreshes we get the name tanzim cause it sets the default name to tanzim
//we dont want that to happen cause every time we update we want to store it in local storage