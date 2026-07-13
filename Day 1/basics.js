// import { username } from "./data";
const data=require('./data')
// console.log(data.username);

var a=10;
let b=2;
console.log(a+b);

if(a=20){
    console.log("20 is there");
}
else{
    console.log(`${a} is there.`);
}
function fruit(item){
    console.log(item);
}
fruit("banana");
for(var a=0; a<=10;a++){
    console.log(a);
}
var a=0;
while(a!=10){
    console.log(a);
    a=a+2;
}

var users=["Adarsh", "Aditya", "sam", "pater"];

for(var i=0;i<users.length; i++){
    console.log(users[i]);
}

var users={
    name:"Adarsh Ojha",
    age:21,
    city: "Ara"
}
console.log(users);
console.log(users.name);