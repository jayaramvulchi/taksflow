//copies part of this array to another location in the same array and returns this array without modifying its length//

let numbers = [1,2,3,4,5];
console.log(numbers.copyWithin(0,3));

let letters = ['a','b','c','d','e'];
//console.log(letters.copyWithin(0,3))
console.log(letters.copyWithin(-3,-2))

//output : d e c d e

