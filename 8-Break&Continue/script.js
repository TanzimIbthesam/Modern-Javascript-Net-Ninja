//BREAk AND CONTINUE
const scores=[10,20,40,0,50,100,200];

for(let i=0;i<scores.length;i++){
  
   if(scores[i]===0){
       continue;
   }
    console.log(scores[i]);
   if(scores[i]===100){
       console.log('Congrats you have got the highest marks');
       break;
   }
}

