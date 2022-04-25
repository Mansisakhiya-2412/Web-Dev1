const fs = require("fs");

console.log("Before");
let F1KaPromise = fs.promises.readFile("f1.txt");
let F2KaPromise = fs.promises.readFile("f2.txt");
console.log(F1KaPromise);

F1KaPromise.then(function (data) {

    console.log(data + " ");

})

F1KaPromise.catch(function (error) {
    console.log(error);
})

F2KaPromise.then(function (data) {

    console.log(data + " ");

})

F2KaPromise.catch(function (error) {
    console.log(error);
})

console.log("AFter");