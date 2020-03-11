const symbolOne=Symbol();
const symbolTwo=Symbol();

console.log(symbolOne,symbolTwo,typeof(symbolOne));
console.log(symbolOne==symbolTwo);
//can be used as key or property name in objects

const profiles={};
profiles.age=30;
profiles['name']='Tanzim';
profiles['name']='Mark';
profiles[symbolOne]='Tanzim';
profiles[symbolTwo]='MarkTwo';
console.log(profiles);
//using keys ina symbol means all keys in an object are definitely unique