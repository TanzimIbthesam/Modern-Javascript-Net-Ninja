console.log('Coming from DOM file');

const body=document.querySelector('body');

 const styleBody=()=>{
    body.style.background='lemonchiffon';
}
//we can also write export addTitle
  const addTitle=text=>{
    const title=document.createElement('h1');
    title.textContent=text;
    body.appendChild(title);
};
//we can also import a string

 const email='tanzim200@gmail.com';
styleBody();
addTitle('Hello World hi how are all of you');
//to export everything in one go
export{styleBody,addTitle,email};