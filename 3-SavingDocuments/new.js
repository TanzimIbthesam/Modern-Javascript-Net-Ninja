const list = document.querySelector('ul');
const form = document.querySelector('form');

const addSportsItem = (recipe) => {
  let time = recipe.created_at.toDate().getTime();
  let html = `
    <li>
      <div>${recipe.title}</div>
      <div><small>${time}</small></div>
    </li>
  `;

  list.innerHTML += html;
};

// get documents
db.collection('sportsitem').get().then(snapshot => {
    console.log(docs);
  snapshot.docs.forEach(doc => {
    addSportsItem(doc.data());
  });
}).catch(err => {
  console.log(err);
});

// save documents
form.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const sportitem = {
    title: form.sportsitem.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('sportsitem').add(sportitem).then(() => {
    console.log('recipe added');
  }).catch(err => {
    console.log(err);
  });
});