
//This is where we will start to initialize our application
//DOM queries
const chatlist=document.querySelector('.chat-list');
//class instances
const chatUI=new ChatUI(chatlist);
const chatroom=new Chatroom('gaming','Tanzim');
//get chats and render
//we are only lstening to chatrroms where room is music
chatroom.getChats(data=>chatUI.render(data));