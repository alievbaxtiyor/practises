//Nolga teng bo'lmagan ikkita son berilgan. Ularning yig'indisi, ko'paytamsini va har birining moduli aniqlansin.
"use strict";
let a = +prompt("Birinchi sonni kiriting:"),
  b = +prompt("Ikkinchi sonni kiriting:"),
  S = a + b,
  K = a * b,
  firstNumber = Math.abs(a),
  secondNumber = Math.abs(b);
console.log(
  `Sonlarning yig'indisi ${S} , ko'paytmasi ${K} , modullari ${firstNumber} va ${secondNumber}`
);
