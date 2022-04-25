//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");

let path = require("path");

let sourcepath = path.join(__dirname, "..", "..", "..", "Module-1", "index.html");  // ".." --> anathi 1 Folder back javay
console.log("Source path -->",sourcepath);

// let destPath = path.join("E:\\Web Dev\\MOdule-2","index.html");
let destPath = path.join(__dirname, "..", "..","index.html"); // ".." --> anathi 1 Folder back javay
console.log( "Destination path --> ",destPath);

fs.copyFileSync(sourcepath,destPath);