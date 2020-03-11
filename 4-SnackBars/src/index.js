import Tooltip from './tanzimui/tooltip';
import Dropdown from './tanzimui/dropdown';
import Tabs from './tanzimui/tabs';
import Snackbar from './tanzimui/snackbar';

//create a tooltip 
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns 

const dropdowns=document.querySelectorAll('.dropdown');

console.log(dropdowns);

dropdowns.forEach(dropdown => {
    const instance=new Dropdown(dropdown);
    instance.init();
});
//create tabs
const tabs=new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar=new Snackbar();
snackbar.init();

const button=document.querySelector('button');
console.log(button);
button.addEventListener('click',()=>{
snackbar.show('You clicked Me');
});