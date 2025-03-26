// task -1: console log the secondary school location of Sophia
// let data = {
//   Sophia: {
//     id: 33,
//     study: [
//       {
//         primary: [
//           { school_name: "ABC primary school" },
//           { location: "Peters burg" },
//         ],
//       },
//       {
//         secondary: [
//           { school_name: "ABC secondary school" },
//           { location: "St Lorence" },
//         ],
//       },
//     ],
//   },
// };
// console.log(data.Sophia.study[1].secondary[1].location);

// task-2: console .log  output: Petersburg, Herry-----------------

// let students = {
//   2222: {
//     name: "Jack",
//     section: "C",
//     class: "IX",
//     address: {
//       "building no": 12,
//       street: "St. Jonson",
//       city: "Petersburg",
//       country: "UK",
//     },
//   },
//   3333: {
//     name: "Herry",
//     section: "D",
//     class: "X",
//     address: {
//       "building no": 85,
//       street: "DC road",
//       city: "Kachukhet",
//       country: "Bangladesh",
//     },
//   },
// };

// console.log(students[2222].address.city);
// console.log(students[3333].name);

// task-3 : access and then show habluder adda
// show output Beginner
// let data2 = {
//   data: [
//     {
//       bookId: 1,
//       bookDetails: {
//         name: "habluder adda",
//         category: "XYZ",
//         price: "20$",
//       },
//       bookCategory: "Basic",
//     },
//     {
//       bookId: 2,
//       bookDetails: {
//         name: "gobluder adda",
//         category: "ABC",
//         price: "40$",
//       },
//       bookCategory: "Beginner",
//     },
//   ],
// };

// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

// const numbers = [1, 3, 5, 7, 9];
// let store = [];
// for (const num of numbers) {
//   const sum = num + 1;
//   store.push(sum);
// }
// console.log(store);

// this is by for loop-------------

// map way----------\

// function evenArray(odds) {
//   return odds + 1;
// }
// const evens = numbers.map(evenArray);
// console.log(evens);

// another arrow with map way---------------------------------

// const evenArray = (a) => a + 1;
// const result = numbers.map(evenArray);
// console.log(result);

// anoter direct arrow with map way-------------------

// const result = numbers.map((a) => a + 1);
// console.log(result);

// -------------------
// arrow function with map---------

// const friends = ["tom", "john", "micheal"];
// const length = friends.map((friend) => friend[0]);
// console.log(length);

//  by filter--

// const array = [33, 50, 79, 78, 90, 101, 30];
// const divisible10 = array.filter((p) => p % 10 === 0);
// console.log(divisible10);

// by find--

// const array = [33, 50, 79, 78, 90, 101, 30];
// const divisible10 = array.find((p) => p % 10 === 0);
// console.log(divisible10);

// const instructor = [
//   { name: "nodi", age: 28, position: "senior" },
//   { name: "shobuj", age: 27, position: "junior" },
//   { name: "pervez", age: 30, position: "senior" },
// ];

// by for loop with function--------------

// function getSenior(names) {
//   let senior = [];
//   for (const name of names) {
//     if (name.position === "senior") {
//       senior.push(name);
//     }
//   }
//   return senior;
// }
// const senior = getSenior(instructor);
// console.log(senior);
// by for loop with function--------------

// by filter----------

// const findSenior = instructor.filter((p) => p.position === "senior");
// console.log(findSenior);
// by filter----------

const people = [
  { name: "nodi", age: 20 },
  { name: "shobuj", age: 15 },
  { name: "pervez", age: 22 },
];

// let i = 0;
// const sumOFAll = (a) => a[i].age;
// const getAge = sumOFAll(people);
// console.log(getAge);
// sum all age number by for loop--------------------

// function sumOFAll(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     const allNumber = number.age;
//     sum = allNumber + sum;
//   }
//   return sum;
// }
// const getSum = sumOFAll(people);
// console.log(getSum);
// sum all age number by for loop--------------------

// sum all age number by reduce method--------------------
const initialValue = 0;
const total = people.reduce((Prev, current) => {
  const result = Prev.age + current.age;
});

// console.log(total);
// sum all age number by reduce method--------------------
