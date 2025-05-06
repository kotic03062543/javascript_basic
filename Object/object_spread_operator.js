// object spread operator คือ การใช้ ... ในการ copy object และเพิ่ม property ใหม่เข้าไป
// และสามารถใช้เพื่อ copy ค่าจาก object ไปยัง object ใหม่ได้
const user1 = {
  name: "John",
  age: 30,
  isAdmin: true,
};
const user2 = { ...user1, isAdmin: false, career: "Programmer" };
console.log(`user1 = ${JSON.stringify(user1)}`); // user1 = {"name":"John","age":30,"isAdmin":true}
console.log(`user2 = ${JSON.stringify(user2)}`); // user2 = {"name":"John","age":30,"isAdmin":false,"career":"Programmer"}
