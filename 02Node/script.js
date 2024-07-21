/* 
1.Node.js Basics:-It is not a programming language, also not a technology, not framework, not a library.
                It is a runtime environment for JavaScript. It is a platform built on Chrome's V8 JavaScript engine.
2.Introduction to Node.js :- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event.
3.Installing Node.js and npm
4.Working with modules
5.File system operations
6.Understanding HTTP module
*/


/*---------------- writeFile -------------------//
fs.writeFile(file, data[, options], callback)

const fs = require('node:fs');
fs.writeFile("Hey.txt", "Hey hello kaise ho", function(err){
    if(err) console.error(err);
    else console.log("File created successfully");
})
*/

/* ------------------- appendFile -----------------------
fs.appendFile(path, data[, options], callback)

// const fs = require('node:fs');
// fs.appendFile("Hey.txt", " Mai to achaa huu", function (err) {
//     if (err) console.error(err);
//     else console.log("File created successfully");
// })
*/

/*
------------------------ rename ------------------
fs.rename(oldPath, newPath, callback)
const fs = require('node:fs');
fs.rename("Hey.txt", "Hello.txt", function (err) {
    if (err) console.error(err);
    else console.log("File renamed successfully");
})
*/

/*
------------------- copyFile -----------------------
fs.copyFile(src, dest, flags, callback)
const fs = require('node:fs');
fs.copyFile("Hello.txt", "./copy/copy.txt", function (err) {
    if (err) console.error(err);
    else console.log("File copied successfully");
})
*/

/*
------------------- unlink ------------------------
fs.unlink(path, callback)
const fs = require('node:fs');
fs.unlink("Hello.txt", function (err) {
    if (err) console.error(err);
    else console.log("Removed");
})
*/

/*
------------------------ rmdir ------------------
// It removes the directory if it is blank
const fs = require('node:fs');
fs.rmdir("./helloworld", { recursive: true }, function (err) {
    if (err) console.error(err);
    else console.log("removed");
})
*/

/*
----------------------- mkdir --------------------
fs.mkdir(path[, options], callback)
const fs = require('node:fs');
fs.mkdir("./helloworld", function (err) {
    if (err) console.error(err);
    else console.log("created succesfully");
})
*/

