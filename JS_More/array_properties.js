// สมบัติของ array
let colors = ["red", "blue", "green"];
console.log("เริ่ม", colors);
console.log("length", colors.length); // นับสมาชิก

console.log("sort เรียงจากน้อยไปมาก", colors.sort()); // เรียงจากน้อยไปมาก
console.log("sort เรียงจากมากไปน้อย", colors.reverse()); // เรียงจากมากไปน้อย

console.log("สมากชิกตัวแรก", colors[0]);
console.log("สมากชิกตัวท้าย", colors[colors.length - 1]);

colors.push("grey");
console.log("เพิ่มสมาชิกต่อท้าย", colors);

colors.pop();
let x = colors.pop(); // grey
console.log("ลบสมาชิกตัวท้ายออก", colors);
