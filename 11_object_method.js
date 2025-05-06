// กำหนด data ให้กลายเป็นวัตถุ มองเป็นวัตถุ
// object ต่างจาก array คือมีการตั้งชื่อให้วัตถุ ข้อมูล เช่น let ชื่อ object = {propName:value}
// array เข้าถึงข้อมูลด้วย index

let user = { name: "KK", age: 20, email: "wanchaloem.phr@axons.com" };
let cours = { id: 1, name: "javascript", price: 450 };

console.log(user.name);
console.log(cours.name);
console.log(user["name"]); // ไม่แนะนำใช้

console.log("====================== object method =====================");
// เป็นการสร้าง function ขึ้นมาข้างใน object และเอาไปใช้งาน
// ใช้ this เพื่ออ้างอิงถึง object.property ชี้ถึงข้อมูลว่าจะเอาข้อมูล object...นั้น มาใช้งาน
let product = {
  id: 1,
  name: "javascript",
  price: 450,
  time: "2 Hrs.",
  displayProduct: function () {
    return `คอสเรียน ${this.name} ราคา ${this.price} ระยะเวลา ${this.time}`;
  },
  discount: function (discount = 0) {
    let dis = this.price - (discount * this.price) / 100;
    return `จองวันนี้ลดเหลือเพียง ${dis} บาท เท่านั้น !!`;
  },
};
console.log(product.displayProduct());
console.log(product.discount(50));
