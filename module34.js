// promise structure---
// const myLeader = () => {
//   return new Promise((resolves, reject) => {
//     const success = true;
//     if (success) {
//       resolves(0.6);
//     } else {
//       reject(1);
//     }
//   });
// };
// const myLeader = () => {
//   return new Promise((resolves, reject) => {
//     const success = Math.random();
//     if (success <= 0.5) {
//       resolves(success);
//     } else {
//       reject(success);
//     }
//   });
// };
// myLeader()
//   .then((data) => console.log("resolve data:", data))
//   .catch((error) => console.log("reject data:", error));

// async/await---------
// fetch("")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//   etar ekta valo version dekhbo...easy way--

// async/await with normal function-------------------------

// async function loadData() {
//   const res = await fetch("");
//   const data = await res.json();
//   console.log(data);
// }
// loadData();

// async diye likhle call korte hbe---
// async/await with normal function---------------------------

// async/await with arrow function----------------------
// variable a nibo function ta k--

// const loadData4 = async () => {
//   const res = await fetch("");
//   const data = await res.json();
//   console.log(data);
// };
// async/await with arrow function-------------------------

// setInterval & cleanInterval---------------------
// console.log(1);
// console.log(2);
// console.log(3);
// const time = setTimeout(() => {
//   console.log(4);
// }, 3000);
// // clearInterval(time); off kora jai--
// console.log(5);
// console.log(6);
// console.log(7);

// const clock = setInterval(() => {
//   console.log("I L U", 20000);
// });
// clearInterval(clock); off kora jai--
// setInterval & cleanInterval---------------------

// JS Event Loop------------------------------------
console.log("start");
setTimeout(() => {
  console.log("late men", 4000);
});
console.log("end");

// ekhane late men ta majher dike output a show korar kotha set threded jodi mene cholto...4 sec off rekhe but event queue bole ekta method ase j khane asynchronous operation gula scheduled/later execution kore dibe...

// JS Event Loop------------------------------------
