import Tooltip from './tanzimui/tooltip';
import Dropdown from './tanzimui/dropdown';
import Tabs from './tanzimui/tabs';

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