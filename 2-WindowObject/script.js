const correctAnswers=['A','D','A','D','A'];

let form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
console.log(result);
// console.log(result.querySelector(result));
form.addEventListener('submit',e=>{
   e.preventDefault();
    let score=0;
    //checkanswers
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((userAnswer,index)=> {
        if(userAnswer===correctAnswers[index]){
            score +=25;
         //show result on page 
         window.scrollTo(0,0);
            if(score==100){
              result.textContent='Fantastic You got an A+';
              result.classList='d-block bg-success display-3 text-white text-center';
            }else if(score==75){
                result.textContent='Good You got an B+ you can do better';
                result.classList='d-block bg-primary display-3 text-white text-center';
            }else if(score==50){
                result.textContent='You got D Average need better';
                result.classList='d-block bg-warning display-3 text-white text-center';
            }else{
                result.textContent='Unfortunately you got F.Better luck next time ';
                result.classList='d-block bg-danger display-3 text-white text-center';
            }
        }
        // displaysection.innerText+=`Your score is ${score}<h1>`;
        
    });
    // result.querySelector('span').textContent=`${score}%`;
    // result.classList='d-block';
    //Windows object 
    
});
 //Windows object 
// console.log('Hello World');
// window.console.log('Hello World');
//
// alert('Hello World');
// window.alert('Hello World');
const uname=document.querySelector('.quiz-form');
console.log(uname);
window.console.log(uname);
// window.console.log(document.QuerySelector('.quiz-form'));
//to set a time for a perticular event or action
// setTimeout(()=>{
// alert('Hello World');
// },3000);




