let random = Math.floor(Math.random() * 100); 
// Math.floor ใช้สำหรับปัดเศษลง
// ปัดเศษขึ้นใช้ Math.ceil
// Math.random ใช้สำหรับสุ่มตัวเลข 0-1
console.log(random);
document.getElementById("randomId").innerHTML = `Number of random is ${random}`;