// Spread Operator---------------------

// ----------------------max value ta ber korbo--------------------

// normal way-------

1; // const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(max);

// array mddhe ber krbo--------------------

2; // const numbers = [1, 2, 3, 4, 5, 6];
// const arrayMax = Math.max(numbers);
// console.log(arrayMax);

// NaN dekhacce---

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(...numbers);
// const arrayMax = Math.max(...numbers);
// console.log(arrayMax);

// spread operators diye array mddhe value gula access kora jai-------------

// const [first, second, ...remaining] = [1, 2, 3, 3, 4, 5, 5, 6];
// console.log(first);
// console.log(second);
// console.log(remaining);

// Object er mddhe thekew access kora jai----------

// const { name, age, ...others } = {
//   name: "ananto",
//   age: 40,
//   x: 3,
//   y: 6,
// };

// console.log(name, age, others);
