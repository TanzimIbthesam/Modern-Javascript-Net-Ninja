//adding new chat documents-Done

//setting up a real time listener to get new chats-Done


//updating the username 

//updating the room

class Chatroom{
    constructor(room,username){
        this.room=room;
        this.username=username;
        this.chats=db.collection('chats');
        this.unsub
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
        //this.unsub will unsubscribe from changes
       this.unsub= this.chats //this takes in 3 arguments 1st property name
        .where('room','==',this.room)
        .orderBy('created_at')
        //orderby need  a bit of configuration
        //now we are going to get data from documents whose room is gaming

        .onSnapshot(snapshot=>{
               snapshot.docChanges().forEach(change => {
                   if(change.type==='added'){
                    
                       callback(change.doc.data())
                       //we have a real time listener set up everytime there will be snapshot there will be
                       //fire check whether change type is added a added type check there will be a callback
                       //everytime data is added we ca retireve and do that with these callback functions
                   }
                   
               })
        });
    }
    updateName(username){
     this.username=username;
     //we will use it in localstorage
    }
    updateRoom(room){
    this.room=room;
    //it will be the room we selected
    console.log('Room Updated');
    //we are unsubscribing from changes
    if(this.unsub){
        this.unsub();
    }
    
    }
}




//unsubscribe for changes from these documents
// chatroom.getChats((data)=>{
//     console.log(data);
//     });
//set an interval of 3s when passing
// setTimeout(()=>{
//     chatroom.updateRoom('gaming');
//     chatroom.updateName('Mark');
//     chatroom.getChats((data)=>{
//     console.log(data);
//     });
    //This callback function fires after everytiime we get a new change
    // chatroom.addChat('Hello');
    //it will just add to gaming

// },3000);
//this.unsub will help us unsubscriibe from changes to the listener
//when we change room and change to gaming
//Take data and pass it to chat UI
