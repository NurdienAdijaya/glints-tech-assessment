// QUIZ
// Sebuah platform memiliki fitur loyalty program dalam bentuk poin.
// Poin itu nantinya bisa di tukarkan untuk redeem sebuah voucher pulsa.
// Berikut list voucher pulsa nya :
// - Voucher 10rb = 100p
// - Voucher 25rb = 200p
// - Voucher 50rb = 400p
// - Voucher 100rb = 800p
// Buatlah sebuah fungsi program untuk kasus berikut :
// 1. Menentukan voucher dgn point terbesar
// 2. Menghitung sisa poin setelah di redeem dgn point terbesar jika poin yg dimilik adalah 1000p
// 3. Redem all point dgn memprioritaskan poin terbesar. Contoh :
//     1. jika poin 1150, outputnya adalah voucher 100rb, 25rb, 10rb dgn sisa poin adalah 50p
//     2. jika poin 2000, outputnya adalah voucher 100rb, 100rb, 50rb dgn sisa poin adalah 0
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Step:
 * -  buat list voucher
 * -  sort voucher dari point terbesar ke kecil
 * -  buat variable untuk:
 *      --  sisa point
 *      --  total voucher yang di tukar
 * -  looping:
 *      -- jika sisa point dapat ditukar voucher terbesar, maka kurangi point yang dimiliki dan tukarkan dengan voucher terbesar
 *      -- jika sisa point tidak dapat ditukar dengan voucher terbesar saat ini, maka lihat dengan voucher terbesar berikutnya
 * -  buat return hasil fungsi:
 *      -- jika point yang diinput adalah angka
 *      -- jika point yang diinput bukan angka
 */

function Point(number) {
  const list = [
    { point: 100, voucher: 10000 },
    { point: 400, voucher: 50000 },
    { point: 800, voucher: 100000 },
    { point: 200, voucher: 25000 },
  ];

  // 1. sort point terbesar - terkecil
  list.sort(function (a, b) {
    return b.point - a.point;
  });

  // 2. sisa point & total voucher yang di tukar
  var pointRemaining = number;
  var totalVoucher = [];

  do {
    if (pointRemaining - list[0].point > list[0].point) {
      totalVoucher.push(list[0].voucher);
      pointRemaining = pointRemaining - list[0].point;
    } else if (pointRemaining < list[0].point) {
      list.splice(0, 1);
    } else {
      totalVoucher.push(list[0].voucher);
      pointRemaining = pointRemaining - list[0].point;
      list.splice(0, 1);
    }
  } while (list.length > 0);

  // 3. return
  if (isNaN(number)) {
    return `Please input a number!`;
  } else {
    return `voucher ${totalVoucher.join(
      ", "
    )} dgn sisa poin adalah ${pointRemaining}p`;
  }
}

//////////////////////////////////////////////////////////

function Test(fun, result, preview) {
  console.log(fun === result, preview);
}
Test(
  Point(1150),
  "voucher 100000, 25000, 10000 dgn sisa poin adalah 50p",
  `Output: ${Point(1150)}`
);
Test(
  Point(2000),
  "voucher 100000, 100000, 50000 dgn sisa poin adalah 0p",
  `Output: ${Point(2000)}`
);
Test(Point("sapi"), "Please input a number!", `Output: ${Point("sapi")}`);
