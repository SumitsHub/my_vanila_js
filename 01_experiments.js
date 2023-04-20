const foo = () =>{
    console.log('Hello this is fooo');
}
console.log(foo); // OR
console.log(foo.toString());
// Output
// () =>{
//     console.log('Hello this is fooo');
// }

function foo2(a=12, b=13) {
    console.log('function foo');
}
console.log(foo2.prototype);
console.log(foo2.arguments);

a = [
    one=1,
    two=2
]
console.log(a); // [1, 2]
console.log(a.at(0)); // 1
console.log(a["one"]); // undefined
// a.shift() // remove 1st element
a.unshift(90) // adds element to 1st position
console.log(a); // [90, 1, 2]

// OBJECT
const obj = {
    a: 1, b: 2, 
}

console.log(obj.prototype); // undefined

console.log(obj); // {a: 1, b: 2}
console.dir(obj);

console.log(document.location);
console.dir(document.location);

console.time('test');
let sum = 0;
// for(let i=0; i<9**9; i++) {
//     sum += i;
// }
console.log(sum);

console.timeEnd('test')



// console.log('Heyy');

let arr = ['One', 'Two'];
console.log(arr[1]);

arr.length=0; // delete array trick
// delete arr[0];
console.log(arr);

obj2 = {'name':'Sumit'} // JS Object
console.log(obj2.name)


console.log(2);
setTimeout(()=> console.log(3), null);
console.log(4)

