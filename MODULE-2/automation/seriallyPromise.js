let fs = require("fs");

let F1KaPromise = fs.promises.readFile("f1.txt");


F1KaPromise.then(function (data) {
    console.log(data + "");
    let F2KaPromise = fs.promises.readFile("f2.txt");
    return F2KaPromise;
}).then(function (data) {
    console.log(data + "");
    let F3KaPromise = fs.promises.readFile("f3.txt");
    return F3KaPromise;
}).then(function (data) {  
    console.log(data + "");
    let F4KaPromise = fs.promises.readFile("f4.txt");
    return F4KaPromise;
}).then(function (data) {
    console.log(data + "");
    let F5KaPromise = fs.promises.readFile("f5.txt");
    return F5KaPromise;
}).then(function(data){
    console.log(data+"");
})