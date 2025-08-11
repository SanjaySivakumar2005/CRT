
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Sanjay")); 

let a = 10;
let b = 20;

let sum = function(x, y) {
    return x + y;
}
let sum2 = (x, y) => x + y;

console.log(sum(a, b));
console.log(sum2(a, b));

function a(){
    let b=1;
    return function b(){
        b++;
        return b;
    }
}


function outer(){
    let count=0;
    return functio inner() {
        count++;
        return count;
    };
}
const counter=outer();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = outer();
console.log(counter2());

let a=10;
let b=20;
let sum=function(a,b) {
    return a+b;
}
let sub=function(a,b){
    reurn a-b;
}
let multiply=function(a,b) {
    return a*b;
}
let divide=function(a,b) {
    return a/b;
}
function calculate(a,b,operation) {
    return operation(a,b);
}
console.log(calculate(a,b, sum));