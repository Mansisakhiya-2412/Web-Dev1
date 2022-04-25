// //empty object
// let obj = {};
// console.log(obj);

// //object == key-pair value --> key name : value ,
// let objAman = {
//     "Name": " vishal bhanderi ",
//     Age: 26,
//     phoneNo: 9909802023,
//     lastName: 'Gandhri'
// }
// console.log(objAman)

let capAmerica = {
    Name: 'steve',
    Age: 9898,
    Friends: ['Natasha', 'Thor', 'Tony', 'Hulk'],
    dapoo: 'false',
        address: {
            city: 'surat',
            state: 'Rajkot'
    },
    sayHi: function () {
        console.log("Cap America says Namaste")
    }
}
//whole object
//console.log(capAmerica);

//name oF capAmerica
console.log(capAmerica.Name);
//age oF capAmerica
console.log(capAmerica.Age);
//Friends oF CapAmerica
console.log(capAmerica.Friends);
//address oF capAmerica 
//console.log(capAmerica.address);
console.log(capAmerica.address.city);

// sayHi
capAmerica.sayHi();

console.log("objects beFore update : ", capAmerica);
//add a new key to  object
capAmerica.Movies = ['avengers', 'civil war', 'endgame'];
console.log("objects ater update : ", capAmerica);

//delete a key
delete capAmerica.Movies;

console.log(capAmerica);

capAmerica.dapoo = true;
console.log(capAmerica);

capAmerica.address.state = 'New York';
console.log(capAmerica);


//second method to access a key

console.log(capAmerica.Name);
console.log(capAmerica['Name']);


