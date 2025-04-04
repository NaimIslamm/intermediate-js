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

// function a(name) {
//   console.log(name);
// }
// a("deep");
// const number = 5;
// a(number);
// const arrayName = [1, 2, 3, 4, 5, 6, 7, 8];
// a(arrayName);
// const istrue = true;
// a(istrue);

// function a(parameter) {
//   parameter();
// }
// function greetingHandler() {
//   console.log("good morning");
// }
// a(greetingHandler);

// function a(parameter, name) {
//   parameter(name);
// }
// function greetingHandler(name) {
//   console.log("Good Morning", name);
//   //   low order function a ekta parameter nilam 'name'---
// }
// a(greetingHandler, "Naim Islam");

// high order function ta k call korci & vitore function name ta arguements hisebe pathacci--------------
// function displayUser(data) {
//   console.log(data);
// }
// function loadusers() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => displayUser(data));
// }
// loadusers();

// onno site er api diye tar data amr website a show korano----------------------------------

// ei function er mddhe jei api ase oita ekta button click korle data show korbe---------------------

// function loadData2() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => displayUser(data))
//     .catch((error) => console.log("probled detected:", error));
// }

// function displayUser(data) {
//   const postContainer = document.getElementById("post-container");
//   const userList = document.getElementById("user-list");
//   for (const user of data) {
//     const li = document.createElement("li");
//     li.innerText = user.name;
//     userList.appendChild(li);
//     const div = document.createElement("div");

//     div.innerHTML = `<h2>User:${user.name}</h2>
//     <h3>Zip:${user.zipcode}</h3>
//     <h4>Loaction:${user.city}</h4>`;
//     postContainer.appendChild(div);
//     // we can style
//     div.classList.add("use-div");
//     div.style.fontSize = "30px";
//   }
// }
