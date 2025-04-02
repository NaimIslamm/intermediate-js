// function add(num1, num2) {
//   return num1 + num2;
// }
// const result = add(2, 3);
// console.log(result);

// const add = function (num1, num2) {
//   return num1 + num2;
// };
// const result = add(12, 3);
// console.log(result);

// arrow function---------------------------------------------

// const add = (num1, num2) => {
//   const result = num1 + num2;
//   return result;
// };
// const result = add(12, 3);
// console.log(result);

// arrow function---------------------------------------------

// more short-------------------------------------------------

// const add = (num1, num2) => num1 + num2;
// const result = add(12, 3);
// console.log(result);

// more short-------------------------------------------------

// deep function by JS BANGLADESH----

// function er vitore function/complete function k value hisebe return kora hcce jeta onno kono language a possible na -----------------------------------------------

// function something() {
//   return function anything() {
//     return "hello";
//   };
// }
// console.log(something());

// function er vitore function/complete function k value hisebe return kora hcce jeta onno kono language a possible na -----------------------------------------------

// function digun(x) {
//   return x * 2;
// }
// console.log(digun(2));

// // --------------

// function tingun(x) {
//   return x * 3;
// }
// console.log(tingun(2));

// // --------------

// function chargun(x) {
//   return x * 4;
// }
// console.log(chargun(2));

// toh etivabe korle somoy lagce amra higher order function diye kaj ta dynamically kore felbo--------------------------------------------------------

// function multiplier(gunok) {
//   return function maan(x) {
//     return x * gunok;
//   };
// }
// const double = multiplier(5);
// console.log(double(7));

// same but store in a variable----------------------

// function multiplier(gunok) {
//   const gun = function maan(x) {
//     return gunok * x;
//   };
//   return gun;
// }
// const double = multiplier(5);
// console.log(double(5));

// arrow function--------------------------------------------

// const multiplier = (gunok) =>
//   function (x) {
//     return x * gunok;
//   };
// const double = multiplier(5);
// console.log(double(7));
// arrow function--------------------------------------------

// console.log(double); only double ta jodi console kori tahle vitorer lower order function pabo. cause return ta double variable er moddhe hcce....r lower order a jehetu parameter ase oita console er somoy jodi arguements diy tahle x er man ta pabe r code ta return hbe............

// callback function
// mane hcce ekta function k r ekta function er moddhe execute kora run kora---------

// function sayHi() {
//   console.log("say hi within another function");
// }
// function anotherFunc(callback) {
//   callback();
// }
// anotherFunc(sayHi);

// call back sara function-----------------------------------------------------
// function calculation(num1, num2, types) {
//   if (types === "add") {
//     return num1 + num2;
//   } else if (types === "minus") {
//     return num1 - num2;
//   }
// }
// console.log(calculation(15, 5, "minus"));

//   eibar dynamically call back diye banabo-----------------------------------

// function calculation(num1, num2, callback) {
//   return callback(num1, num2);
// }
// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// console.log(calculation(15, 5, add));
