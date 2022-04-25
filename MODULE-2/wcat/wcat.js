let fs = require("fs");
//const { arrayBuffer } = require("stream/consumers");

let inputArr = process.argv.slice(2);
console.log(inputArr);

let OptionArr = "";
let FileArr = "";
for (let i = 0; i < inputArr.length; i++) {

    if(OptionArr.charAt[0] ){
        
    }
    else{

    }
}


let buffer = "";
for (let i = 0; i < inputArr.length; i++) {

    let FileContent = fs.readFileSync(inputArr[i]);
    buffer += FileContent;
}

console.log(buffer);

