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
          //Net Ninja way
            //  result.querySelector('span').textContent=` ${score}%`;
            // result.classList='d-block bg-success';
            // result.classList.remove('d-none');
            window.scrollTo(0,0);
    // result.classList.remove('d-none');
    let output=0;
   
  
            const timer=setInterval(()=>{
                if(score==100){
                    result.textContent=`Fantastic You got an A+${output}%`;
                    result.classList='d-block bg-success display-3 text-white text-center';
                  }else if(score==75){
                      result.textContent=`Good You got an B+${output}% you can do better`;
                      result.classList='d-block bg-primary display-3 text-white text-center';
                  }else if(score==50){
                      result.textContent=`You got D ${output}%  Average needs to get better`;
                      result.classList='d-block bg-warning display-3 text-white text-center';
                  }else{
                      result.textContent=`Unfortunately you got F ${output}% .Better luck next time`;
                      result.classList='d-block bg-danger display-3 text-white text-center';
                  }
                // result.textContent=`Your score is ${output}%`;
                if(output==score){
                    clearInterval(timer);
                }else{
                    output++;
                }
               

            },15);

        
        }
    
        
    });
    
   
    
});

// setInterval(()=>{
//     console.log('Hello World');

// },1000);




let i=0;

// const timer=setInterval(()=>{
// let i=0;
// console.log('Hello');
// i++;
// if(i===5){
//     clearInterval(timer);
// }
// },1000);