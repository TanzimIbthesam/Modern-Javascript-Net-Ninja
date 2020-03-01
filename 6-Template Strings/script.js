const title='Programming contest';
const author='John Doe';
const likes=55;
 //concatenation way
console.log('The title of the blog is'+title+'its author is'+author+'the total likes is'+likes);
console.log('hello world');
//template string
console.log(`The title of the blog is ${title} the author is ${author} and the total likes ${likes}`);
//Creating html templates
let html=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Template Strings</title>
</head>
<body>
<h2>${title}</h2>
<h3>${author}</h3>
<h4>${likes}</h4>

</body>
</html>


`;
alert(html);