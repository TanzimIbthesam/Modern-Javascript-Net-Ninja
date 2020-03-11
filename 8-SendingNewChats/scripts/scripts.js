
//This is where we will start to initialize our application
//DOM queries
const chatlist=document.querySelector('.chat-list');
const newChat=document.querySelector('.new-chat');

//Add a new chat
newChat.addEventListener('submit',e=>{
e.preventDefault();
const message=newChat.message.value.trim();
chatroom.addChat(message)
.then(()=>newChat.reset())
.catch(err=>console.log(err));
//we can use chatrrom as we have instantiated the class below
});
//class instances
const chatUI=new ChatUI(chatlist);
const chatroom=new Chatroom('music','Tanzim');
//get chats and render
//we are only lstening to chatrroms where room is music
chatroom.getChats(data=>chatUI.render(data));