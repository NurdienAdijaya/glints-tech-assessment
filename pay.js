// 1. membuat fungsi calculatechange
// 2.

function changeCalculate(price, cash) {
  // const returnValue = cash - price;
  // const round = Math.round(returnValue / 1000) * 1000;
  var returnValue = cash - price;
  var change = {};

  var coinTypes = [20000, 10000, 50000, 1000, 2000, 100, 200, 300, 50];

  var coinValue = [20000, 10000, 5000, 2000, 1000, 250, 100, 50, 10];

  var amount;

  for (var i = 0; i < coinValue.length; i++) {
    amount = Math.floor(returnValue / coinValue[i]);
    if (amount > 0) {
      change[coinTypes[i]] = amount;
      returnValue = returnValue % coinTypes[i];
    }
  }

  return change;
}
function calculateChange(price, cash) {
  const returnValue = cash - price;
  // const round = Math.round(returnValue / 1000) * 1000;
  // return round;
  return returnValue;
  // var returnValue = cash - price;
  // var change = {};
  // var coinTypes = [20000, 10000, 50000, 1000, 2000, 100, 200, 300, 50];
  // var coinValue = [20000, 10000, 5000, 2000, 1000, 250, 100, 50, 10];
  // var amount;
  // for (var i = 0; i < coinValue.length; i++) {
  //   amount = Math.floor(returnValue / coinValue[i]);
  //   if (amount > 0) {
  //     change[coinTypes[i]] = amount;
  //     returnValue = returnValue % coinTypes[i];
  //   }
  // }
  // return change;
}
console.log(calculateChange(700649, 800000));
console.log(calculateChange(575650, 580000));
console.log(calculateChange(657650, 600000));

console.log(changeCalculate(700649, 800000));
console.log(changeCalculate(575650, 580000));
console.log(changeCalculate(657650, 600000));
