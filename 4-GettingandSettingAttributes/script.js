const anchor=document.querySelector('a');
//For getting attribute a href
console.log(anchor.getAttribute('href'));
//For setting value of the attribute
anchor.setAttribute('href','https://www.youtube.com');
anchor.innerText='The Net Ninja Website';
// anchor.innerHTML='<h1>The Net Ninja Website</h1>';

//
const message=document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class','success');
message.setAttribute('style','color:green');
//If we want to remove any attribute
// message.removeAttribute('style');
//You can set and get any html attributes this way