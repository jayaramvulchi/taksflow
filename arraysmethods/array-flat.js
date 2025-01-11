// This method in javascript creates a new array by removing neste levels of sub-arrays//
//It combines all the elements into a single array up to the specified depth//

let arr =[1,[2,3],[4,[5,6]]];
let flatArray = arr.flat();
console.log(flatArray);


let arr1 = [1,[2,3],[4,[5,6]]];

let flatArray1 = arr.flat(1);
console.log(flatArray1);
