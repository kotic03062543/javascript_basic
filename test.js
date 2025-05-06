const test1 = {
  a: 1,
  b: 2,
};
const test2 = {
  c: 3,
  d: 4,
};

// destructuring, object

// const key = Object.keys(c);
// const value = Object.values(c);

const test3 = {
  ...test1,
  ...test2,
};
// console.log(test3);

// เข้าถึงค่าใน object ด้วย destructuring
const { a } = test1;
console.log(a);

// console.log(key);
// console.log(value);

// Object.entries(c).forEach(([key, value]) => {
//   console.log("key", key, "value", value);
// });

// key.forEach((e) => {
//   value.forEach((v) => {
//     console.log("key", e, "value", v);
//   });
// });

// let a = [1, 2, 3, 4, 5];
// let b = [];
// // a.push(6);

// a.forEach((e) => {
//   console.log(`for + 1`);
// });

// let c = a.map((e) => function awdaw(a) {

// });

// const filter = a.find((e) => e % 2 == 0);
// console.log(`filter`, filter);

// // console.log(a);
// // console.log("3", a[2]);
