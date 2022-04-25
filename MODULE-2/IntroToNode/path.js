//"E:\Web Dev\MOdule-2\IntroToNode\path.js"

let path = require("path");
//console.log(path);

let extensionName = path.extname("E:\Web Dev\MOdule-2\IntroToNode\path.js");

console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);

//console.log(__dirname);

console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"dapo.js");
console.log(newFilePath);