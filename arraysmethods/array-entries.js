//This method returns a new iterator object that contains key-value pairs for each index in the array. Each pair includes: index(key), Value of the array element.//
let colors = ['red','blue','green'];
let colorEntries = colors.entries();
console.log(colorEntries.next().value);
console.log(colorEntries.next().value);
console.log(colorEntries.next().value);