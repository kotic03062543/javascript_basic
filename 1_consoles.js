// Knowledge: console.log
// วิธีการแสดงผลใน console ของ browser
// " " ใช้สำหรับการแสดงข้อความ
// ` ` ใช้สำหรับการแสดงข้อความแบบมีตัวแปร เช่น ${name}
// , ใช้สำหรับการแสดงข้อความแบบแยกด้วยช่องว่าง 
// + ใช้สำหรับการแสดงข้อความแบบติดกัน 

for (let i = 1; i <= 3; i++) {
  console.log("Hello, World!");
}

const age = 25;
let name = "KK";
let firstName = "Wanhcaloem";
let lastName = "Phromjan";
let feeling = "good.";

console.log(name + firstName + lastName); // ติดกัน
console.log(name, firstName, lastName); // แยกด้วยช่องว่าง
console.log(name + " " + firstName + " " + lastName); // แยกด้วยช่องว่าง
console.log(`Hello, ${name} ${firstName} ${lastName}. How are you? ${feeling}`); // แยกด้วยช่องว่าง
