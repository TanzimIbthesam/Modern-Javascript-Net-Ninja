let email='tanzim67@gmail.com';
let result=email.lastIndexOf('m');
console.log(result);
//slice 
let resulttwo=email.slice(4,10);
console.log(resulttwo);
//substr
let resultthree=email.substr(4,10);
console.log(resultthree);
//replace 
let resultfour=email.replace('m','n');
//replace only replaces the first common function if there are 3 m it only takes first n
console.log(resultfour);