const list=document.querySelector('ul');
const form=document.querySelector('form');
console.log(form);
console.log(list);

const AddSportsItem=(sportitem)=>{
    // console.log(sportitem.created_at.toDate());
    let time = sportitem.created_at.toDate();
    let html=`
    <li>
     <div>${sportitem.title}</div>
      
      <div>Created At-${time}</div>
      
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
    AddSportsItem(doc.data());
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