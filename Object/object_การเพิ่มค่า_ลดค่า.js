// การเพิ่ม แก้ไข และลบ key ใน object
// ใช้ delete, assignment
const info = {
  name: "John",
  age: 30,
  isAdmin: true,
};
info.isAdmin = false; // แก้ไขค่า
console.log(info);

delete info.age; // ลบ key
console.log(info);

info.adress = "999"; // เพิ่ม key
console.log(info); // { name: 'John', isAdmin: false, carrer: 'Programmer' }

