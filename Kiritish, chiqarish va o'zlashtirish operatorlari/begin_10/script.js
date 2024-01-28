//Nolga teng bo'lmagan ikkita son berilgan. Ularning yig'indisi, ko'paytamsini va har birining kvadrati aniqlansin.
"use strict";
let a = +prompt("Birinchi sonni kiriting:"),
  b = +prompt("Ikkinchi sonni kiriting:"),
  S = a + b,
  K = a * b,
  firstNumber = Math.pow(a, 2),
  secondNumber = Math.pow(b, 2);
console.log(
  `Ularning yig'indisi ${S} , ko'paytmasi ${K} , va har birining kvadratlari ${firstNumber} , ${secondNumber}`
);
