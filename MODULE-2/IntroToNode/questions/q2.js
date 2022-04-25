// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");

let path = require("path");

let arr = ['audio', 'video', 'sotware', 'document', 'applications', 'others'];
let nameArr = ['abc', 'xyz', 'deh', 'jkl'];
let extArr = ['.mp3', '.mp4', '.exe', '.pdf','.apk','.rar']

let organisePath = path.join(__dirname, 'organise');
if (!fs.existsSync(organisePath))
    fs.mkdirSync(organisePath);

for (let i = 0; i < arr.length; i++) {
    let FolderKaPath = path.join(organisePath, arr[i]);
    if (!fs.existsSync(FolderKaPath)) {
        fs.mkdirSync(FolderKaPath)
    }
    for (let j = 0; j < nameArr.length; j++) {
        let FileName = nameArr[j]+extArr[i];
        let Filekapath = path.join(FolderKaPath,FileName);
        fs.writeFileSync(Filekapath,"");
    }
}