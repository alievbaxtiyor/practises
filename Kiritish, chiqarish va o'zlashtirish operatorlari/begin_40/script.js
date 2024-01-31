//A1,B1,C1,A2,B2,C2 koeffisientlari berilgan, chiziqli tenglamalar sistemasi yechimlari aniqlaydigan programma tuzilsin.
"use strict";
let a1 = +prompt("A1 ni qiymati: "),
  b1 = +prompt("B1 ni qiymati: "),
  c1 = +prompt("C1 ni qiymati: "),
  a2 = +prompt("A2 ni qiymati: "),
  b2 = +prompt("B2 ni qiymati: "),
  c2 = +prompt("C2 ni qiymati: "),
  d = a1 * b2 - a2 * b1,
  x = (c1 * b2 - c2 * b1) / d,
  y = (a1 * c2 - a2 * c1) / d;
console.log(x && y);
