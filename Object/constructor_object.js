// constructor function (ฟังก์ชันสร้างออบเจ็ค)
// ใช้ฟังก์ชันเพื่อสร้าง object หลาย ๆ ตัวจากโครงสร้างเดียวกัน
function User(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = false;
  this.greet = function () {
    console.log("Hello", this.name);
  };
}
const user1 = new User("John", 30);
const user2 = new User("Jane", 25);
console.log(user1);
