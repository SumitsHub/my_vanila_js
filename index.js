// setTimeout(()=>{
//   console.log(c);
// }, 1000)

// var c = 20;

// setTimeout(()=>{
//     console.log(x);
// })
// function func(){
//     console.log(x);
// }
// func();
// var x = 20;

console.log('%cThis is red text!\n%cThis is green', `color: red`, 'color:green');

let arr = [1,2,3];
let str = "1,2,3";

console.log(arr == str); // true
console.log(str == arr); // true

console.log(arr === [1,2,3]); // false


console.log(1 == '1');
console.log(0 == 2*0);