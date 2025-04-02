// primitive & non-primitive------------

// let a = 5;
// let b = a;
// console.log(a, b);
// b = 7;
// console.log(a, b);

// non-primitive-----

// let p = { job: "web developer" };
// let q = p;
// console.log(p, q);
// // totally new object ta k assign korci------

// // q = { job: "bacckend Developer" };
// // console.log(p, q);

// // 1st Reference ta sere 2nd ta dhorlo 2 ta alada output dicce-------

// q.job = "fron end";
// console.log(p, q);

// bot change hoye gece///
// print5(a);
// function print5(i) {
//   console.log(5, i);
// }
// var a = 6;
// print5(a);
// var dici bole pacce upor theke call krci taw------

// for closure------------------------------------------

// function stopWatch() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }
// const storeReturn1 = stopWatch();
// console.log(storeReturn1());
