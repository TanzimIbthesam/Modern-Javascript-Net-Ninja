const profiles=[
    {name:'Tanzim',age:20,permanent:true},
    {name:'Mark',age:30,permanent:false},
    {name:'Rob',age:30,permanent:false},
    {name:'Allen',age:25,permanent:true}
]
//to export a default value

// export const getPremUsers=(profiles)=>(profiles.filter(profile=>profile.permanent));
 


// export default profiles;

const getPremUsers=(profiles)=>(profiles.filter(profile=>profile.permanent));
//To export both named and default
export {getPremUsers,profiles as default};