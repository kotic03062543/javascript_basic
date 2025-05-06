// function declaration หรือ function statement คือการประกาศฟังก์ชั่นโดยใช้คีย์เวิร์ด function และใส่ชื่อฟังก์ชั่น
function display(elementId, value) {
  document.getElementById(elementId).innerHTML = value;
}

function getValueFromInput(elementId) {
  return document.getElementById(elementId).value;
}

// function expression คือการประกาศฟังก์ชั่นโดยใช้ตัวแปร
var getElementById = function (id, response) {
  return (document.getElementById(id).innerHTML = response);
};

// Arrow function
var getElementById = (id, response) => {
  return (document.getElementById(id).innerHTML = response);
};
var getElementById = (id, response) =>
  (document.getElementById(id).innerHTML = response);

// ความแตกต่างระหว่าง function declaration กับ function expression และ arrow function
// คือ function declaration สามารถเรียกใช้งานได้ทุกที่ แต่ function expression และ arrow function ต้องประกาศก่อนเรียกใช้งาน
// และ function declaration สามารถเรียกใช้งานได้ก่อนประกาศ แต่ function expression และ arrow function ต้องประกาศก่อนเรียกใช้งาน

// Path: 10_function.js
function toCelsius(elementId) {
  let farenheit = getValueFromInput(elementId);
  console.log("farenheit is", farenheit);
  var celsius = (5 / 9) * (farenheit - 32);
  return `อุณหภูมิ ${celsius.toFixed(2)} °C`;
}
function toFahrenheit(elementId) {
  let celsius = getValueFromInput(elementId);
  console.log("celsius is", celsius);
  var farenheit = (9 / 5) * celsius + 32;
  return `อุณหภูมิ ${farenheit.toFixed(2)} °F`;
}
// เรียกใช้
document.getElementById("convertBtn").addEventListener("click", function () {
  display("result", toCelsius("fahrenheit"));
});
document.getElementById("convertBtn").addEventListener("click", function () {
  display("result1", toFahrenheit("celsius"));
});
