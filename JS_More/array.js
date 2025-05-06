// array is ชุดตัวแปรที่อยู่ในรูปลำดับใช้เก็บค่าข้อมูล เป็นกลุ่ม
// array is ตัวแปรที่ใช้เก็บข้อมูลได้หลายค่า โดยใช้ชื่ออ้างอิงได้แค่ชื่อเดียว
// ใช้ index ในการเข้าถึงข้อมูล
// 1 ตัวแปรเก็บค่าได้หลายๆ ค่า

let days = Array("จันทร์", "คาร", "พุธ", "หัส", "ศุกร์", "เสาร์");

let days2 = ["จันทร์", "คาร", "พุธ", "หัส", "ศุกร์", "เสาร์"];
let mixes = ["test", 120, true];

console.log(days);
console.log(days2);
console.log(mixes);
console.log(days2[3]);

console.log(
  "====================== เปลี่ยนค่าใน array ========================="
);
let colors = ["red", "green", "blue"];
colors[1] = "yellow";
console.log(colors);

console.log("=============== แปลง array to string =====================");
let to_string = Array("จันทร์", "คาร", "พุธ", "หัส", "ศุกร์", "เสาร์");
console.log("ก่อน", to_string);
console.log("แปลง", to_string.toString());

console.log("=============== join นำค่า Array มาแปลงเป็น string และมีการเพิ่ม สัญลักษณ์ต่างๆ =====================");
let _join = Array("จันทร์", "คาร", "พุธ", "หัส", "ศุกร์", "เสาร์");
console.log("ก่อน", _join);
console.log("แปลง", _join.join(" / "));