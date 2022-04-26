function promisiFiedFunc() {
    return new Promise(function (resolve, reject) {
        //code
        let a = 1;
        let b = 1;
        if(a==b){
            resolve("EEqual");
        }else{
            reject("Unequal");
        }
    })
}

let somepromise = promisiFiedFunc();

somepromise.then(function(x){
    console.log(x);
})

somepromise.catch(function(err){
    console.log(err);
})

