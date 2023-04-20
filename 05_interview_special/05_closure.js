// Closure concept
function outer() {
    var x = 'outer';
    return function inner() {
        console.log(x);
        return x;
    }
}

outer()(); // outer

const inner = outer();
inner(); // outer