// JSON.stringify() คือฟังก์ชันใน JavaScript ที่ใช้สำหรับ แปลงค่า (object, array, หรืออื่น ๆ) 
// ให้กลายเป็น ข้อความในรูปแบบ JSON (JavaScript Object Notation)

// JSON.parse() คือฟังก์ชันใน JavaScript ที่ใช้สำหรับ แปลงข้อความในรูปแบบ JSON กลับมาเป็น object หรือ array

const user = { name: "Wanzi", age: 24 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // 👉 '{"name":"Wanzi","age":24}'

const jsonString2 = '{"name":"Wanzi","age":24}';
const user2 = JSON.parse(jsonString2);
console.log(user2); // 👉 { name: 'Wanzi', age: 24 }

