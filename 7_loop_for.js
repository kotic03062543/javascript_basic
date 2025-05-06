// for (let counter = 0; counter < 5; counter++) {
//     // const element = array[counter];
//     console.log("Hello", counter);
// }

let qrt = prompt("จำนวนสินค้า ");
let sum_price = 0;

if (!isNaN(qrt)) {
  for (let i = 1; i <= qrt; i++) {
    console.log(i);
    let price_item = prompt("ราคาสินค้าชิ้นที่" + i);
    console.log(price_item);
    sum_price += parseFloat(price_item);
    document.getElementById(
      "price-list"
    ).innerHTML += `<li>ราคาสินค้าชิ้นที่ ${i} : ${price_item} บาท</li>`;
  }
  document.getElementById("sum-price").innerHTML = `ราคารวม ${sum_price} บาท`;
} else {
  alert("กรุณากรอกตัวเลข");
  window.location.reload();
}
