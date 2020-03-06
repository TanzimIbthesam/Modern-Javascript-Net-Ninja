
let user={
    name:'Tanzim',
    age:30,
    email:'tanzim67@gmail.com',
    location:'Bangladesh',
    blogs:['Cheese rules','10 things to make with cheese'],
    login:function(){
        console.log('Hello World');
    },
    logout:function(){
        console.log('User is logged out');
    },
    // logBlogs:function(){
    //     //console.log(this.blogs);
    //     console.log('This user has wriitten the following blogs');
    //     this.blogs.forEach(blog=>{
    //      console.log(blog);
    //     });
    // }
    //functions can alternatively be written as
    logBlogs(){
        console.log('This user has written the following blogs');
        this.blogs.forEach(blog=>{
         console.log(blog);
        });
    }
}
user.logBlogs();
//We cant write arrow functions inside an object but we can write logBlogs()