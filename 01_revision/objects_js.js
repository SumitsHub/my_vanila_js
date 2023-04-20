//? Object

// const object1 = { a: 'foo', b: 42, c: {} };

// console.log(object1.a);
// // expected output: "foo"

// const a = 'foo';
// const b = 42;
// const c = {};
// const object2 = { a: a, b: b, c: c };

// console.log(object2.b);
// expected output: 42

// const object3 = { a, b, c };

// console.log(object3.a);
// expected output: "foo"


//? Syntax
// let o = {}
// let o = {a: 'foo', b: 42, c: {}}

// let a = 'foo', b = 42, c = {}
// let o = {a: a, b: b, c: c}

let obj = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};

console.log(obj);

//? ECMAScript 2015
// Shorthand property names (ES2015)
// let a = 'foo', b = 42, c = {};
// let o = {a, b, c}

// Shorthand method names (ES2015)
// let o = {
//   property(parameters) {}
// }

// Computed property names (ES2015)
// let prop = 'foo';
// let o = {
//   [prop]: 'hey',
//   ['b' + 'ar']: 'there'
// }

//? Property Definitions
let a = 'foo',
    b = 42,
    c = {};

// Shorthand property names (ES2015)
let o = {a, b, c}

// In other words,
console.log((o.a === {a}.a)) // true

//? Method definitions
// let o = {
//     property: function (parameters) {},
//     get property() {},
//     set property(value) {}
//   }


//? Spread properties

let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let obj1Copy = obj1; // both references to the same

let clonedObj = { ...obj1 } // both references to different 
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }

//? delete property
// console.log(delete obj1.foo); // deletes from obj1Copy too
// console.log(obj1, clonedObj, obj1Copy);

// let arr = ['Sumit', 'Amit', 'Ashish']
// console.log(delete arr[0]);
// console.log(arr); // [empty, 'Amit', 'Ashish']
// console.log(arr.length); // 3
// console.log(arr[0]); // undefined

//? Object Constructor
let newObj = new Object(obj1); // same as -> newObj = obj1
delete obj1.foo; // deletes from newObj too
console.log(newObj); 

