//A,B,C koeffisientlar berilgan, Ax^2+BC=0 kvadrat tenglamaning diskriminanti noldan katta bo'lsa uning yechimlari aniqlaydigan programma tuzilsin.
"use strict";
let a = +prompt("A ning koeffisienti: "),
  b = +prompt("B ning koeffisienti: "),
  c = +prompt("C ning koeffisienti: "),
  d = Math.pow(b, 2) - 4 * a * c,
  x = ((-b + -Math.sqrt(d)) / 2) * a;
console.log(x);
