//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");

let path = require("path");

if (!fs.existsSync("newFolder")) {
    fs.mkdirSync("newFolder");//JEMA AA FILE 6E AMA J FOLDER BANSE NEW
}

let Filekapath = path.join(__dirname, "newFolder", "newFile.txt"); // je new Folder banavyu ama new File banavva mate (responsible For path)
console.log(Filekapath);

fs.writeFileSync(Filekapath, "new File has been made ") //Responsible CREATE A FILE WITH CONTENT
