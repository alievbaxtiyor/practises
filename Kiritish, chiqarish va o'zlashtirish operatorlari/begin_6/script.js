//Paralelipedning tomonlari a, b, c berilgan. Uning hajmi va to'la sirti aniqlansin.
"use strict";
let a = +prompt("1-tomonini kiriting:"),
  b = +prompt("2-tomonini kiriting:"),
  c = +prompt("3-tomonini kiriting:"),
  V = a * b * c,
  S = 2 * (a * b + b * c + c * a);
console.log(`Paralelipedning hajmi ${V} ga teng sirti ${S} ga teng`);
