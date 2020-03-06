//Object literal 
// const blog=[
// {title:'Cheese rules',likes:10},
// {title:'10 things to make with cheese',likes:30}
// // ];
// console.log(blog);
let user={
    name:'Tanzim',
    age:30,
    email:'tanzim67@gmail.com',
    location:'Bangladesh',
  blogs:[
        {title:'Cheese rules',likes:10},
        {title:'10 things to make with cheese',likes:30}
        ],
        logBlogs(){
            console.log('This user has written the following blogs');
            this.blogs.forEach(blog=>{
             console.log(blog.title,blog.likes);
            });
        }
    }
    user.logBlogs();
