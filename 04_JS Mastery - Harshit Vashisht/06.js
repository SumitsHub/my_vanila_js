// Hoisting

hello();

//* function expressions are not hoisted - ReferenceError
// const hello = function() {
//     console.log('Hello')
// }

function hello() {
  console.log("Hello there!");
}

// lexical scope
function myApp() {
  const myVar = "value1";
  function myFunc() {
    const myVar = "value59";
    console.log("inside myFunc", myVar);
  }
  console.log(myVar);
  myFunc();
}
myApp();
