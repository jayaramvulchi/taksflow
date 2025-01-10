//It will test whether all elements in the array pass the test implemented by the provided function. It returs a boolean value//




const isBelowThreshold = ( currentValue ) => currentValue < 40;
const array1 = [1,30,29,10,13];
console.log(array1.every(isBelowThreshold));
