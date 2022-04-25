let cp = require('child_process');
//console.log(cp);

//open calculator with the help of this file
cp.execSync("calc");

//open vs code with child process
//cp.execSync("code");

let content = cp.execSync("node dapo.js");

console.log("when darpan is thinking about doru and suddenly : "+ content);
//console.log(""+content);