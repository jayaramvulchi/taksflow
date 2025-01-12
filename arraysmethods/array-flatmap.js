//applies a function to each element of an array and then flatterns the reulting arrays into a single array, reducing nested arrays by one level//

const numbers = [1,2,3];
const result = numbers.flatMap(num => [num,num*2]);
console.log(result);

const sentences = ["hello world", "flatmap is cool"];
const result1 = sentences.flatMap(sentences = sentences.split(" "));
console.log(result);