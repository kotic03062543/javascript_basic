// replace split

const text = "Hello world! world";
const fruits = "Apple, Banana, Apple, Orange";
const word = "WANCHALOEM";

console.log(
  "============ replace ใช้เพื่อ แทนที่ข้อความ (เฉพาะตัวแรกที่พบ หรือทั้งหมดถ้าใช้ replaceAll()) ============"
);
const replaceText = text.replace("world", "KK"); // แทนที่ world ด้วย KK ตัวแรกที่เจอ
console.log("replaceText", replaceText);

const replaceAllText = fruits.replaceAll("Apple", "Papaya"); // ทนที่ world ด้วย Papaya ทุกตัว
console.log("replaceAllText", replaceAllText);

console.log(
  "============ split ใช้เพื่อ แยก string ออกเป็น array ============"
);
const fruitArray = fruits.split(", ");
console.log("splitTextToArray", fruitArray);

const splitWord = word.split("");
console.log(splitWord);
