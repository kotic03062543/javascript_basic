console.log(
  "=============== join() นำค่า Array มาแปลงเป็น string และมีการเพิ่ม สัญลักษณ์ต่างๆ ====================="
);
let _join = Array("จันทร์", "คาร", "พุธ", "หัส", "ศุกร์", "เสาร์");
console.log("ก่อน", _join);
console.log("แปลง", _join.join(" / "));

console.log(
  "=============== slice() นำค่า Array มาตัดแบ่งให้เหลือเท่าที่ต้องการ ====================="
);
// slice(start, end) ตัดส่วนของ array โดยเริ่มที่ index start และหยุดก่อนถึง index end (ไม่นับ
// start = 1 (ตำแหน่งของ "Orange")
// end = 2 (ตำแหน่งของ "Lemon", แต่ไม่รวม)
// ดังนั้น ได้ผลลัพธ์เป็น ["Orange"]
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("ก่อน", fruits);
console.log("หลัง slice", fruits.slice(1, 2));

console.log(
  "=============== splice() ใช้เพื่อลบ, แทรก หรือแทนที่ค่าภายใน array โดยจะเปลี่ยนแปลงค่าใน array เดิม ====================="
);
// ใช้เพื่อลบ, แทรก หรือแทนที่ค่าภายใน array โดยจะเปลี่ยนแปลงค่าใน array เดิม (mutate array)
// array.splice(start, deleteCount, item1, item2, ...);
// start → จุดเริ่มต้นของการเปลี่ยนแปลง (index)
// deleteCount → จำนวนรายการที่ต้องการลบ
// item1, item2, ... → (ไม่บังคับ) ค่าใหม่ที่ต้องการแทรกแทนที่ตำแหน่งที่ถูกลบ

// Create an Array
const spliceArray = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add "Lemon" and "Kiwi":
spliceArray.splice(2, 0, "Lemon", "Kiwi");
console.log(spliceArray);
