//get a reference to ul
const ul=document.querySelector('.people');
const people=["Mario","Chun-li","ryu","luigi"];
let html=``;
people.forEach(function(person){
    html +=`<li style="color:purple">${person}</li>`
});
console.log(html);
ul.innerHTML=html;