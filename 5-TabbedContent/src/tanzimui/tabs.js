import './styles/tabs.css';
class Tabs{
    constructor(container){
      this.container=container;
      this.tabs=container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click',e=>{
                this.toggleTabs(e);
                this.toggleContent(e);

            })
        });
    }
    toggleTabs(e){
        //remove current active classes from tabs
        this.tabs.forEach(tab =>tab.classList.remove('active'));
        //add new active classes to tab list
        e.target.classList.add('active');
    }
    toggleContent(e){
        //remove current active classes from content
     this.container.querySelectorAll('.content').forEach(item => {
         item.classList.remove('active');
     });
        //add new active classes to tab list
         //First we need to get data-target attribute of whatever element we want to click
       const selector=e.target.getAttribute('data-target');
       const content=this.container.querySelector(selector);
       content.classList.add('active');
    }
    }
    export {Tabs as default};
   
