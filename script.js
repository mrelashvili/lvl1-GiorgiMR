"use strict";

let firstNum = 1;
let secondNum = 1;
let sum = 0;

function fibonnaciEven() {
  while (firstNum + secondNum < 4000000) {
    if (firstNum % 2 === 0) {
      sum += firstNum;
    }
    firstNum += secondNum;
    if (secondNum % 2 === 0) {
      sum += secondNum;
    }
    secondNum += firstNum;
  }
  console.log(`Even-valued numbers sum is: ` + sum);
}

fibonnaciEven();

//////////////////////////////
