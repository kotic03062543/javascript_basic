let fruits = ["orange", "banana", "coconut"];
let vatgets = ["pukcard", "kana", "tang"];
let water = ["pela", "coke", "sprite"];

console.log("================== รวม Array ===============");
fruits = fruits.concat(vatgets);
water = water.concat(vatgets, fruits);
// console.log(mixes);
console.log(fruits);
console.log(water);
