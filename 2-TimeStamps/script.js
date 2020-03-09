const before=new Date('February 1 2020 07:30:59');
const now=new Date();
// console.log(now.getTime(),before.getTime());
// console.log(now.getTime(),before.getTime());
const diff=now.getTime()-before.getTime();
console.log(diff);
const mins=Math.round(diff/1000/60);
console.log(mins);

const hours=Math.round(mins/60);
console.log(hours);

const days=Math.round(hours/24);
console.log(days);

console.log(`The blog was written ${days} days ago`);

const timestamp=16547894557878;
console.log(new Date(timestamp));