let name=prompt("welcome to simple calculator. Enter your name ");
function calculation(a,b){
    let x=parseFloat(a);
    let y=parseFloat(b);
console.log( "Hi "+ name + " your " +"First Given Numer Is = "+ x);
console.log (" Second Given Numer Is = "+ y);
console.log( "Addition value = "+(x + y));
console.log( "Subtraction value = "+ (x - y));
console.log("Multiplication value = "+(x * y));
console.log("Divison value = "+ (x / y));
console.log("Thank You ! "+name);
}
let a=prompt("Enter First Number");
let b=prompt("Enter Second Number");
calculation(a,b);