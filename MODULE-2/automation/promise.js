const FS = require("fs");

console.log("BeFore : ");
let F1kaPromise = FS.promises.readFile("f1.txt");
let F2KaPromise = FS.promises.readFile("f2.txt")

F1kaPromise.then(function(data){
    console.log(data+" ");
})

F1kaPromise.catch(function(error){
    console.log(error);
})


F2KaPromise.then(function(data){
    console.log(data+" ")
})

F2KaPromise.catch(function(error){
    console.log(error);
})

console.log("AFter :")