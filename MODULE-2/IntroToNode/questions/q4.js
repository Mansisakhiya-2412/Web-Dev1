// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");

let FolderkaPath = path.join(__dirname,"..","unorganised");
//console.log(FolderkaPath);
let content = fs.readdirSync(FolderkaPath);
//console.log(content);
let extArr = [];
for(let i = 0 ; i < content.length ; i++){
    let name = content[i];
    let extName = path.extname(name);
    extArr.push(extName);
}
console.log(extArr);