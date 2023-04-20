// object destructuring

const obj = {a: 10, b: 20};
console.log(obj);

// case #01
const {a: val1, b: val2} = obj;
console.log(val1, val2);

// case #02
const {a, ...rest} = obj;
console.log(a, rest); // 10 {b: 20}


// nested destructuring
const users = [
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'mohit', gender: 'male'},
    {userId: 3, firstName: 'nitish', gender: 'male'}
]
const [{firstName}, , {gender}] = users;
console.log(firstName, gender);


// function declaration
function sayHello(name) {
    console.log('Hello', name);
}
sayHello('Amit');

// function expression - anonymous function
const sayHi = function(name) {
    console.log('Hi', name);
}
sayHi('Preeti');

// arrow function
const sayWelcome = name => {
    console.log('Welcome', name);
}
sayWelcome('Dhiru');

const isEven = num => num % 2 === 0;
console.log(isEven(10));

