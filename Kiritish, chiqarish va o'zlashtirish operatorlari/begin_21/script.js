//Uchburchakning uchta tomoni uchlari koordinatalari berilgan.
//Ikki nuqta orasidagi masofani topish Begin20 da berilgan.
//Uchburchakning yuzasini va perimetrini toping.
"use strict";
let x1 = +prompt("Birinchi x o'qini kiriting:"),
  x2 = +prompt("Ikkinchi x o'qini kiriting:"),
  x3 = +prompt("Uchinchi x o'qini kiriting:"),
  y1 = +prompt("Birinchi y o'qini kiriting:"),
  y2 = +prompt("Ikkinchi y o'qini kiriting:"),
  y3 = +prompt("Uchinchi y o'qini kiriting:"),
  a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
  b = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2)),
  c = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2)),
  p = (a + b + c) / 2,
  s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(`Uchburchak yuzasi ${s} va perimetri ${p}`);
