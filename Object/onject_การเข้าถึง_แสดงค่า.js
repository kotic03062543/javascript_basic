// การเข้าถึง key และ value ใน object
// ใช้ for...in loop หรือ Object.keys(), Object.values(), Object.entries()
const user = {
  name: "John",
  age: 30,
  isAdmin: true,
};
for (let key in user) {
  console.log("Object", key, user[key]);
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
