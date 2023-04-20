let arr = [1,2,3]
let obj = {}


console.log(typeof arr); //object
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false

// arr.push(90) -> push returns length of array
// arr.pop() -> return popped item
console.log(arr.push(90));

console.log(arr.unshift(12)); // also returns length of array
console.log(arr);

console.log(arr.shift()); // returns removed item
console.log(arr); 



// primitive vs reference data types

let arr1 = [1,2]
let arr2 = arr1;

console.log(arr1);
console.log(arr2);
arr1.push(3);
arr2.push(4)
console.log(arr1);
console.log(arr2);