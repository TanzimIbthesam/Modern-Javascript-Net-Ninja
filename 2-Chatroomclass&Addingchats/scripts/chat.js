//adding new chat documents 

//setting up a real time listener to get new chats


//updating the username 

//updating the room

class Chatroom{
    constructor(room,username){
        this.room=room;
        this.username=username;
        this.chats=db.collection('chats');
    }

    async addChat(message){
        //we need to construct an object that makes up a chat 
        //format a chat object
        const now=new Date();

        const chat={
            message,
            username:this.username,
            room:this.room,
            created_at:firebase.firestore.Timestamp.fromDate(now)
        }
        //save chat documents 

        const response=await this.chats.add(chat);
        return response;

    }
}

const chatroom=new Chatroom('gaming','Tanzim');

// console.log(chatroom);
chatroom.addChat('Hello World')
.then(()=>
    console.log('Chat Added'))
.catch(err=>{
console.log(err);
})
;