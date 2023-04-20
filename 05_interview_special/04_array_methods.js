// map function array
let arr1 = ['1', '10', '110'];

const parsedInts1 = arr1.map(parseInt);
console.log(parsedInts1); // [1, Nan, 6]

const parsedInts2 = arr1.map((num)=> parseInt(num));
console.log(parsedInts2); // [1,10,110]


console.log(parseInt('10')); // 10


// filter function array
let arr2 = [1, '0', NaN, undefined, null, true, false];

const trueValues = arr2.filter(Boolean);
console.log(trueValues); // [1,'0',true]