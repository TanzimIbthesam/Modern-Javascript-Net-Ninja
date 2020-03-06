const copy=document.querySelector('.copy-me');

copy.addEventListener('copy',()=>{
console.log('OI,My content is copyright protected');
});

const box=document.querySelector('.box');
box.addEventListener('mousemove',e=>{
// console.log(e.offsetX,e.offsetY);
//to track position of cursor
box.textContent=`
pos x-${e.offsetX} 
pos y-${e.offsetY}
`
});
document.addEventListener('wheel',e=>{
console.log(e.pageX,e.pageY);
});
