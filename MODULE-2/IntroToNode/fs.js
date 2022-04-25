let fs = require("fs"); //Fs==File system
//console.log(fs);

let path = require("path");

// let FilePath = path.join(__dirname, "file.txt");
// console.log(FilePath);

// //C-create
// //it creates File i it does exists else it override
// fs.writeFileSync(FilePath, "HEllo i am vadapav  ");

// //R-read
// let content = fs.readFileSync(FilePath, "utf-8");
// console.log(content);

// //U-update
// fs.appendFileSync(FilePath, "newly added content in File");
// console.log("Ater update : ");
// console.log(fs.readFileSync(FilePath,"utf-8"));

// //D-delete
// fs.unlinkSync(FilePath);



//create a directory

// if (!fs.existsSync("Newdirectory"))
//     fs.mkdirSync("Newdirectory");//For create directory in same Folder


// //read a directory

// let FolderPath = "E:\\Web Dev\\Module-1"; //eroor aave to single slace ne 2 slace ma Fervi nakhvu

// let contentFolder = fs.readdirSync(FolderPath);
// console.log(contentFolder);

// //delete a directory

// fs.rmdirSync("Newdirectory");

//copy a File

let sourcePath = path.join(__dirname,"file.txt");
let destinationPath =path.join(__dirname,'module',"file.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);