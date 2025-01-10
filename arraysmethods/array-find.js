// This mentod returns the first element in the porvided array that satisfies the provided testing function//
//If no values satisfy the testing function undefined is returned.//

// const array1 = [5,12,8,130,44];

// const found = array1.find((element)=>element >10);

// console.log(found);

const inventory = [
    {name : "apples", quantity:2},
    {name : "bananas", quantity:0},
    {name : "cherries", quantity:5},
]

function ischerries(fruit){
    return fruit.name === "cherries"
}

console.log(inventory.find(ischerries));

// find an prime number in an array

const pm = [1,2,3,4,5,6,7];

function isPrimeNumber(element, index,array){
    let start = 2;
    while (start <= Math.sqrt(element)){
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4,6,8,12].find(isPrimeNumber));