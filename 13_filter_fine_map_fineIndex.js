// find, filter, และ map เป็นเมธอดของ Array ใน JavaScript ที่ใช้สำหรับจัดการและประมวลผลข้อมูลในอาร์เรย์
// 	•	find(callback) → คืนค่าตัวแรกที่ตรงกับเงื่อนไขใน callback หรือ undefined หากไม่พบ
// 	•	filter(callback) → คืนค่าอาร์เรย์ใหม่ที่มีเฉพาะค่าที่ตรงกับเงื่อนไขใน callback
// 	•	map(callback) → คืนค่าอาร์เรย์ใหม่ที่มีค่าที่ถูกแปลงตาม callback

const numbers = [1, 2, 3, 4, 5];

// find: หาค่าที่มากกว่า 3 ตัวแรก
const found = numbers.find((num) => num > 3); // 4
console.log("find", found);

// filter: ค่าที่มากกว่า 3 ทั้งหมด
const filtered = numbers.filter((num) => num > 3); // [4, 5]
console.log("filter", filtered);

// map: เพิ่มค่า *2 ให้ทุกตัวในอาร์เรย์ สร้าง array ใหม่
const mapped = numbers.map((num) => num * 2);
console.log("map", mapped); // [2, 4, 6, 8, 10]

// findIndex: คล้ายๆ กับของ find แต่ว่าสิ่งที่ return กลับมาคือ เลข index ของ array แรกที่ผ่าน ถ้าไม่เจอ return -1
const findIndexes = numbers.findIndex((fi) => fi % 2 === 0);
console.log("findIndexes", findIndexes); // 1 index
