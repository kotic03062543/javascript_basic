// Object with methods (ออบเจ็คที่มีเมธอด)
// Object สามารถมีฟังก์ชันเป็นค่าของ key ได้
const objectWithMethods = {
  name: "John",
  age: 30,
  isProgrammer: true,
  greet() {
    console.log("Hello", this.name);
  },
};
objectWithMethods.greet();
