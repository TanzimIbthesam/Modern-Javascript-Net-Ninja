const list=document.querySelector('ul');
console.log(list);

const AddSportsItem=(sportitem)=>{
    // console.log(sportitem.created_at.toDate());
    let time=sportitem.created_at.toDate()
    let html=`
    <li>
     <div>${sportitem.title}</div>
     <div>Created at-${time}</div>
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