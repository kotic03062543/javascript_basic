// ใช้ reduce() บวกลบคูณหารค่าใน array รวมค่าทุกตัวใน array

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce", sum, typeof sum);
