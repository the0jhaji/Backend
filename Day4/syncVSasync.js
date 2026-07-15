// console.log("apple1");
// setTimeout(() => {
//     console.log("Apple0")
// }, 200);
// console.log("apple2");
// console.log("apple3");


//example why not we use sync code
// let a=20;
// let b=0;
// setTimeout(() => {
//     b=100;
//     console.log(a+b);
// }, 2000);
// console.log(a+b);


const fs = require('fs');

console.log("Before readFile");

fs.readFile("text/vdsfjk.txt", "utf-8", (error, data) => {
    console.log("Callback executed");

    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
});

console.log("After readFile");