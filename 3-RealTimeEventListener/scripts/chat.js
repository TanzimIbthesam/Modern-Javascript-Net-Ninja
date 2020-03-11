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
    //Its not going to be an aysnc call its not going to be one time chat
    //set up a real time listener it will return us a response everytime there is a change
    getChats(callback){
        this.chats
        .onSnapshot(snapshot=>{
               snapshot.docChanges().forEach(change => {
                   if(change.type==='added'){
                       //update the UI
                       //we should not inject osmething into the DOM thats responsibility of other classes
                       //pass a callback function 
                       //we are firing a function for each change then get a document reference by typing doc
                       //this callback function is going to fire a change everytime this is going to be added
                       //when we load database its going to consider all of the documents as initial changes 
                       //all will be added types to begin with
                       callback(change.doc.data())
                       //we have a real time listener set up everytime there will be snapshot there will be
                       //fire check whether change type is added a added type check there will be a callback
                       //everytime data is added we ca retireve and do that with these callback functions
                   }
                   
               })
        });
    }
}

const chatroom=new Chatroom('gaming','Tanzim');

chatroom.getChats((data)=>{
console.log(data);
});
// console.log(chatroom);
// chatroom.addChat('Hello World')
// .then(()=>
//     console.log('Chat Added'))
// .catch(err=>{
// console.log(err);
// })
// ;