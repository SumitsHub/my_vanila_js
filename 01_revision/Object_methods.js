// Object methods
//? Object.assign() - Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source, {x: '10'});

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

//? Object.create() - The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
console.log(me);

//? Object.defineProperty() - The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// Syntax: Object.defineProperty(obj, prop, descriptor)
// const object1 = {};

// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false
// });

// object1.property1 = 77;
// throws an error in strict mode

// console.log(object1.property1);
// expected output: 42

//? Object.entries() - The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const object1 = {
  a: "somestring",
  b: 42,
};
console.log("Entries", Object.entries(object1));
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

for (let key of [1, 2, 3, 4]) {
  console.log(key);
}

// expected output:
// "a: somestring"
// "b: 42"

//? Object.freeze()
// The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it,

const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

//? Object.fromEntries()
// The Object.fromEntries() method transforms a list of key-value pairs into an object.

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const objFromEntries = Object.fromEntries(entries);

console.log(objFromEntries);
// expected output: Object { foo: "bar", baz: 42 }

//? Object.is() - The Object.is() method determines whether two values are the same value.
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false

// Case 2: Signed zero
console.log(Object.is(0, -0)); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(-0, -0)); // true
console.log(Object.is(0n, -0n)); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true

//? Object.keys() - The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const object2 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object2));
// expected output: Array ["a", "b", "c"]

// getFoo is a property which isn't enumerable
const myObj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  }
);
console.log(Object.keys(myObj)); // console: []
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']


//? Object.values() - The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
for(let key in object2) { // iterate through keys of object
    console.log(key);
}

console.log(Object.values(object2))