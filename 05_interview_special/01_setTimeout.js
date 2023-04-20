// CODE #01: 
// console.log(1);
// setTimeout(function(){console.log(2)}, 1000)
// setTimeout(function(){console.log(3)}, 0)
// console.log(4);

// Output:
// 1
// 4
// 3
// 2


// CODE #02:
// function x() {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000)
//     var i = 10;
// }
// x();

// Output:
// 10


// CODE #03:
// setTimeout(function(){
//     console.log(2);
// });


// setTimeout(function(){
//   console.log(4);
// }, 1);

// setTimeout(function(){
//     console.log(1);
// }, 0);


// setTimeout(function(){
//   console.log(5);
// }, 0.9);

// setTimeout(function(){
//     console.log(3);
// }, null);


// Output:
// 2
// 1
// 5
// 3
// 4


// CODE #04:
// setTimeout(()=>{
//     console.log(x);
// }, null)
// function func(){
//     console.log(x);
// }
// func();
// var x = 20;

// Output:
// undefined
// 20