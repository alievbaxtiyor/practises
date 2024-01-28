//Sonlar o'qida A,B,C nuqtalar berilgan. AC va BC kesmalarning uzunligini va kesmalar uzunligining yig'indisini topuvchi programma tuzilsin.
"use strict";
let a = +prompt("A nuqtani kiring:"),
  b = +prompt("B nuqtani kiriting:"),
  c = +prompt("C nuqtani kiriting:"),
  ab = b - a,
  bc = c - b,
  abc = a + b + c;
console.log(`A va B nuqtalar oralig'i ${ab}`);
console.log(`B va C nuqtalar oralig'i ${bc}`);
console.log(`Umumiy masofa ${abc}`);
