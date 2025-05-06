let colors = ["red", "blue", "green"];
let nums = [1, 5, 7, -2];

console.log("sort เรียงจากน้อยไปมาก", colors.sort()); // เรียงจากน้อยไปมาก
console.log("sort เรียงจากมากไปน้อย", colors.reverse()); // เรียงจากมากไปน้อย

// ใช้กับตัวเลข callback function
console.log("nums ก่อน", nums);
nums.sort(function (a, b) {
  return b - a;
});
console.log("nums หลัง", nums);
nums.sort(function (a, b) {
  return a - b;
});
