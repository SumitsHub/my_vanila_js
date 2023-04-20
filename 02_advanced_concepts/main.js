//* Lexical Scoping - starts from inner scope to global scope

// let a = 10; // global scope
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }

// outer();

//* Closure
// combination of a function bundled together with references to its surrounding state.
// closures are created every time a function is created, at function creation time.

// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

// Own example
// const func = function() {
//     let count = 0;
//     // console.log(count++);
//     return ()=> console.log(count++);
// }

// const fn2 = func();
// fn2()
// fn2()

//* Function Currying
// Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.

// function sum(a, b, c) {
//     return a+b+c;
// }

// function currySum(fn) {
//     return function(a){
//         return function(b){
//             return function(c){
//                 return a+b+c;
//             }
//         }
//     }
// }

// const curriedSum = currySum(sum)(1)(2)(3)
// console.log(curriedSum);

// const curriedSum2 = currySum(sum);
// console.log(curriedSum2(2)(3)(5));

// const add2 = curriedSum2(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5);

//* this keyword - refers to object it belongs to, this value is determined entirely by how a function is called

function func() {
  console.log(this);
}

//* How to determine 'this'?
/**
 * 1. Implicit binding
 * 2. Explicit binding
 * 3. New binding
 * 4. Default binding
 *
 */

// #01. Implicit binding
const person = {
  name: "Vishwas",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName(); // My name is Vishwas

// #02. Explicit binding
const person2 = {
  name: "Arjun",
};

function sayMyName() {
  console.log(`Hello ${this.name}`);
}
sayMyName.call(person); // Hello Vishwas
sayMyName.call(person2); // Hello Arjun

// #03. New binding
function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new Person("John");
const p2 = new Person("Batman");

console.log(p1.name); // John
console.log(p2.name); // Batman

// #04. Default binding
const name = 'Superman' // this -> for browser

function sayMyName2() {
    console.log(`Hello ${this.name}`);
}

sayMyName2() // Hello undefined

globalThis.name = 'Superman' // this -> for node
sayMyName2() // Hello Superman

/**
 * Order of precedence ->
 * New binding
 * Explicit binding
 * Implicit binding
 * Default binding
 * 
 */

//* Prototype

function NewPersom(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

const np1 = new NewPersom('Bruce', 'Wayne')
const np2 = new NewPersom('Clark', 'Kent')

np1.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

console.log(np1.getFullName()); // Bruce Wanye
// console.log(np2.getFullName()); // Error

console.log(NewPersom.prototype);