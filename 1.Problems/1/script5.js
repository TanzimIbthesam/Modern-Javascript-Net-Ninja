let stmt = ' Apple is a very tasty fruit';
let newstmt = stmt.split(' ');
let firstletter = newstmt[0];
if (newstmt[0] != 'New') {
    newstmt[0] += 'New';
    console.log(newstmt.join(' '));
} else {
    console.log('It has a new keyword');
}