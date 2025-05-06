// Destructuring object คือการดึงค่าจาก object ออกมาเก็บไว้ในตัวแปร

const person = { name: "Wanzi", age: 24 };
const { name, age } = person;

console.log(name);
console.log(age);

// Destructure จาก Object ที่ซ้อนกัน (Nested Object)
const company = {
  name2: "TechCorp",
  location: {
    city: "Bangkok",
    country: "Thailand",
  },
};
const {
  location: { city, country },
} = company;
console.log(city);
console.log(country);

// ใช้ Rest Operator (...) ดึงค่าอื่น ๆ ที่เหลือเก็บเป็น Object
const user = { id: 101, fname: "Wanzi", age: 24, role: "Admin" };
const { id, fname, ...others } = user;
console.log(id);
console.log(fname);
console.log(others);

// สามารถใช้ destructuring กับ parameter ของฟังก์ชันได้ // ชื่อตัวแปรต้องตรงกับ key ใน object
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
const persona = { name: "Wanzi", age: 24, country: "Thailand" };
greet(persona);

// ใช้ Destructuring กับ Array ใน Object
const student = {
  namek: "Wanzi",
  scores: [90, 85, 88],
};
const {
  namek,
  scores: [math, science, english],
} = student;
console.log(math);
console.log(science);
console.log(english); 
