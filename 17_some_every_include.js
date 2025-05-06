// some every include

const numbers = [175, 50, 25];

console.log(
  "================== some() ตรวจสอบว่ามี อย่างน้อย 1 ตัว ที่ตรงเงื่อนไขหรือไม่ คืนค่า T F ================"
);
const someNumber = numbers.some((n) => n > 100);
console.log("someNumber", someNumber);

console.log(
  "================== every() ตรวจสอบว่าทุกค่าตรงเงื่อนไขหรือไม่ คืนค่า T F ================"
);
const everyNumber = numbers.every((e) => e > 10);
console.log("everyNumber", everyNumber);

console.log(
  "================== includes() ตรวจสอบว่ามีค่านั้นอยู่ใน array หรือไม่ คืนค่า T F ================"
);
const includeNumber = numbers.includes(50);
console.log("includeNumber", includeNumber);
