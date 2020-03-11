import {styleBody,addTitle,email} from'./dom';
//explicitly importing that function from file
import profiles,{getPremUsers} from './data';
//getPremUers is a named export while profile is a default export we get suggestions of named export
//there is one default value per file its not going to look for profile
console.log('index file updated');
addTitle('title');
console.log(email);
console.log(profiles);
// console.log(users);
const premUsers=getPremUsers(profiles);
console.log(premUsers);
