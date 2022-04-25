//fUNCTION IN JS WITHOUT PARAETER AND WITHOUT RETURN TYPE
function sayHello() {
    console.log(" We have to begin Function");
}

sayHello();

//fUNCTION WITH PARAMETER
function sum(num1, num2) {
    let add = num1 + num2;
    console.log("addition oF given number is : " + add)
}

sum(3, 5);

//Function with return type
function multiply(num1, num2) {
    return num1 * num2;
}

let ans = multiply(3, 5);
console.log(ans);

//functions are first class citizen in js

let a = function sub(num1, num2) {
    return num1 - num2;
}


console.log(a(10, 5));

//IIfE -> Immediately Invoked Function Expression

(function(){
    console.log("Hello I am IIFE")
})();

(function(){
    console.log("Kya bakchodi hai yar yeh sab")
})();

//IIFE with parameter

(function(num1,num2){
    console.log(num1/num2)
})(12,2);

(function(NUM1,NUM2){
    console.log(NUM1*NUM2)
})(5,6);