// จัดเก็ฐคำสั่งไว้เป็นกลุ่มๆ เพื่อนให้พร้อมใช้งาน , ซ้ำๆ จักระเบียบ reuse ใช้หลากหลาย

// แบบไม่ return ค่า
let sayHi = () => {
  alert("กดทำไม ?");
};
let sayHi1 = (a, b) => {
  console.log(a + b);
};

// return ค่า ใช้สำหรับการดึงข้อมูล มาใช้ต่อ
let get = (b = 1, h = 1) => {
  let result = (1 / 2) * b * h;
  return result;
};
