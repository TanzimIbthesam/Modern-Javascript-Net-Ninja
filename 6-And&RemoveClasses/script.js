// const content=document.querySelector('p');
// content.classList.add('classone');
// content.classList.add('success');

// content.classList.remove('success');
// content.classList.add('error');
// console.log(content.classList);
 const content=document.querySelectorAll('p');
 content.forEach(contents=>{
//  console.log(p.innerText);
//  console.log(contents.textContent);
 //If we write contents.TextContent it displays all elements whether its hidden or not

  if(contents.textContent.includes('success')){
    contents.classList.add('success');
  } 
  if(contents.textContent.includes('error')){
        contents.classList.add('error');
  }
 });
//  console.log(content);
const titleone=document.querySelector('.titleone');
//It will add a new class named test

titleone.classList.toggle('test');
titleone.classList.toggle('test');
