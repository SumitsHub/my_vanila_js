// function currying
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// Curried functions are constructed by chaining closures and by defining and immediately returning their inner functions simultaneously.
function add(x){
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}
const add5 = add(5)
console.log(add5(1)(1)); // 7 -> 5 + 1 + 1

const add6 = add5(6);
console.log(add6(1)); // 12 -> 5 + 6 + 1

const add7 = add6(7);
console.log(add7);