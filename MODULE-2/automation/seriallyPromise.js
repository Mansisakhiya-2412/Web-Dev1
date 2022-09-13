let Fs = require("fs");

let F1kaPromise = Fs.promises.readFile("f1.txt");

F1kaPromise.then(function(data){
    console.log(data+"");
    let F2KaPromise = Fs.promises.readFile("f2.txt");
    return F2KaPromise;
}).then(function(data){
    console.log(data+" ");
    let F3kaPromise = Fs.promises.readFile("f3.txt");
    return F3kaPromise;
}).then(function(data){
    console.log(data+"");
}).catch(function(error){
    console.log(error);
})