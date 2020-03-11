const list=document.querySelector('ol');
const form=document.querySelector('form');
// const delete=document.querySelector('')
console.log(form);
console.log(list);

const AddSportsItem=(sportitem,id)=>{
    // console.log(sportitem.created_at.toDate());
    let time = sportitem.created_at.toDate();
    let html=`
    <li data-id="${id}">
     <div>${sportitem.title}</div>
      
      <div>Created At-${time}</div>
      <button class="btn btn-danger btn-sm my-2 text-white">Delete</button>
      
    </li>
    
    `;
    console.log(html);

    list.innerHTML += html;
}

db.collection('sportsitem').get().then(snapshot=>{
// console.log(snapshot);
//TO see the docs inside the snapshot
// console.log(snapshot.docs);
//to get data from first document
// console.log(snapshot.docs[0].data());
//To get data on each documents
snapshot.docs.forEach(doc => {
    // console.log(doc.data);
    console.log(doc.id);
    AddSportsItem(doc.data(),doc.id);
});

}).catch(err=>{
    console.log(err);
});

form.addEventListener('submit',e=>{
    e.preventDefault();

    const now=new Date();
    const sportitem={
        title:form.sportsitem.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)

        
    };
    db.collection('sportsitem').add(sportitem).then(()=>{
        console.log('Item Added');
    }).catch(err=>{
        console.log(err);
    });
});
//Deleteing data
list.addEventListener('click',e=>{
    if(e.target.tagName ==='BUTTON'){
        //BUTTON needs to be in capital letters cant be in small letters like button
        const id=e.target.parentElement.getAttribute('data-id');
        // data-id is the id of the item we want to delete
        db.collection('sportsitem').doc(id).delete().then(()=>{
            console.log('Sports Item deleted');
        });
        //db.collection('sportsitem').doc(id).delete(); it is aynchronous it takes oem time to complete and it returns a promise
        console.log(id);
    }
    //At first we need to store id in each li tag
    //we need to get id of the li tags
    // console.log('Clicked');
})