
const article=document.querySelector('article');
console.log(article.children);
//we cant loop through html collection 
//in order to loop through html collection we must use Array.from
// console.log(Array.from(article.children));
// console.log(article.children);
Array.from(article.children).forEach(child=>{
child.classList.add('new-class');
});
const title=document.querySelector('h2');
//If we want to know the parent element of a specific property
console.log(title.parentElement);
//If we want to know parent element of a specific parent element
console.log(title.parentElement.parentElement);
//if we want to check the sibling or previous element inside a parent


 console.log(title.previousElementSibling);
 //if we want to check the sibling or nextelement inside a parent
 console.log(title.nextElementSibling);
 //for getting all elements though its not needed
 console.log(title.nextElementSibling.parentElement.children);
//  EventBasic(Click Events)
// Parents,ChildandSiblings

