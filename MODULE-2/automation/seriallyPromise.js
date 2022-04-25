let fs = require("fs");

let F1KaPromise = fs.promises.readFile("f1.txt");


F1KaPromise.then(function (data) {
    console.log(data + "");
    let F2KaPromise = fs.promises.readFile("f2.txt");
    return F2KaPromise;
}).then(function(data){
    console.log(data+"");
}).catch(function(error){
    console.log(error);
})