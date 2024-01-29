//Tekkislikda berilgan ikki nuqta orasidagi masofa topilsin.
"use strict";
let x1 = +prompt("Birinchi x o'qini kiriting:"),
  x2 = +prompt("Ikkinchi x o'qini kiriting:"),
  y1 = +prompt("Birinchi y o'qini kiriting:"),
  y2 = +prompt("Ikkinchi y o'qini kiriting:"),
  s = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(`Nuqtalar orasidagi masofa ${s}`);
