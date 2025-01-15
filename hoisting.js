//Hoisting means moving declarations to the top of the code during execution//
//with let and const the variable exists but you cannot use it until it is initialized//
//function declaarations are fully hoisted
var x; // Declaration is moved to the top (hoisted)
console.log(x);
x=5;
console.log(x);


sayHello();
function sayHello(){
    console.log('Hello!');
}






