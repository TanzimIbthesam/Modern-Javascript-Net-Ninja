//query class name in DOM
// const className=document.getElementsByClassName('error');
 const className=document.querySelectorAll('div.error');
 
console.log(className);
//we cannot use foreach method on HTMl collection
//Get Elements by id
const classId=document.getElementById('errorid');
console.log(classId);
//Get elements by Tag Name 
const Tagname=document.getElementsByTagName('p');
console.log(Tagname);
console.log(Tagname[1]);
