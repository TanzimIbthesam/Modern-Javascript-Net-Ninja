const path=require('path');

module.exports={
entry:'./src/index.js',
//output needs a path
output:{
    //path will not be a relative it will be an absolute URL it will decide where file will be located
    path:path.resolve(__dirname,'dist/assets'),
    filename:'bundle.js'
    //as we defined path and filename it will know from where to start and where to finish
},
devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    publicPath:'/assets/'
}
};

__dirname + ''
//dirname gets absolute path relative to root of our folder

//It means we are going to export a model configuration object which node js will process when we run node js command
//We need to send an antry property and an output property 
//Output will decide where we will bundle output
