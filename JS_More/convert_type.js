// string to number
let age = "25.5";
console.log("ก่อน", typeof age, age);

age = parseFloat(age);
console.log("parseFloat", typeof age, age);

age = parseInt(age);
console.log("parseInt", typeof age, age);

// nunber to string
let price = 250.5;
console.log("ก่อน", typeof price, price);

price = price.toString();
console.log("toString", typeof price, price);
