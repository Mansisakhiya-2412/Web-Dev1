//printing in javascript
console.log("Welcome to Javascript !");

console.log("Mansi Sakhiya");

//variable in js 
// let variable_name = variable value 

let num = 10; // number
console.log(num);

let char = 'a';//character
console.log(char);

let str = 'I m string'; //string
console.log(str);

let bool = true;
console.log(bool);

//loops 
//is prime
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

let n = 21;

let Flag = 1;

for(let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        Flag = 0;
        break;
    }
}

if(Flag == 1){
    console.log("prime");
}else{
    console.log("not prime")
}

