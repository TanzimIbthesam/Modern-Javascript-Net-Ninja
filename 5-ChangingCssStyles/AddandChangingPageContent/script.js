// const para=document.querySelector('p');
// console.log(para.innerText);
// if we want to change the Text
// const paratwo=document.querySelector('p');
//To change value of first quey selected
// paratwo.innerText='Hello World';
//To append to text
// paratwo.innerText+='Hello World';
//Looping through query selector
// const paras=document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText +=' Inner text ';

// });
//innerHtml
const content=document.querySelector('.content');
console.log(content.innerHTML);
//IUf we want to update the content 
// content.innerHTML='<p>Hello World</p>';
//If we want to append the content
// content.innerHTML+= '<h2> Hello World appended</h2> ';
const people=["Tom","Rachel","Morphy"];

people.forEach(person=>{content.innerHTML+=`<p>${person}</p>`;
})