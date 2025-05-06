let a = 100,
  b = 100;

//   เพิ่มค่า prefix -> เพิ่มก่อน นำไปใข้
console.log("============ prefix ++ ===============");
console.log("prefix ก่อน", a);
console.log("prefix กลัง", ++a);
console.log("ปัจจุบัน", a);

//   เพิ่มค่า postfix -> นำค่าปัจจุบันใช้ก่อน แล้วถึงจะเพิ่ม
console.log("============= postfix ++ ==============");
a = 100;
console.log("prefix ก่อน", a);
console.log("prefix กลัง", a++);
console.log("ปัจจุบัน", a);


console.log("============ prefix -- ===============");
console.log("prefix ก่อน", b);
console.log("prefix กลัง", --b);
console.log("ปัจจุบัน", b);


console.log("============= postfix -- ==============");
b = 100;
console.log("prefix ก่อน", b);
console.log("prefix กลัง", b--);
console.log("ปัจจุบัน", b);