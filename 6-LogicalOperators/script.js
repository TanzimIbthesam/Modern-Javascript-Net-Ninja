const password='@@';
 if(password.length>=11 && password.includes('@')){
     console.log('The password is less than 12 characters');
 }else if(password.length>=10 || password.includes('@') && password.length>=2){
     console.log('The password length is greater than 2 characters and has an @');
 }