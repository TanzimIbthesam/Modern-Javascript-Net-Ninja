//.QuerySelector only selects first element if there are 3 paragraph tags it will select first one
const para=document.querySelector('p');
console.log(para);
//for selecting all we have to select document.querySelectorAll
const secondpara=document.querySelectorAll('p');
console.log(secondpara);
//if we want to print specific number of element in an array
console.log(secondpara[0]);
//for selecting a specific class if we apply query selector only first place where class name is there it will appear
const selectclass=document.querySelector('div.error');
console.log(selectclass);
//If we want to select same class in different places 
const selectallClass=document.querySelectorAll('.error');
console.log(selectallClass);

