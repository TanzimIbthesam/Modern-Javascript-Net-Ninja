import './styles/tooltip.css';

class Tooltip{
    constructor(element){
        this.element=element;
        this.message=element.getAttribute('data-message');
        //we will store the data-message on this porperty this.message

    }
    init(){
        const tip=document.createElement('div');
        tip.classList.add('tip');
        //lets set the text content here
        tip.textContent=this.message;
        //we need to apeend it to the DOM we will do it below the span tag
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter',()=>{
            tip.classList.add('active');
        });
        this.element.addEventListener('mouseleave',()=>{
            tip.classList.remove('active');

        });
    }
}
//To import in index.js we have to export it as default
export { Tooltip as default };