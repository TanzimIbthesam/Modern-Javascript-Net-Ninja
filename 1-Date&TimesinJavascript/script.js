const now=new Date();
console.log(now);
console.log(typeof(now));
//year months day time
//get full year
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//Time stamps
console.log(now.getTime());

//datestrings 
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleTimeString());