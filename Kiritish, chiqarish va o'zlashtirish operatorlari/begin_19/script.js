//To'gri to'rtburchak qarama-qarshi uchlari koordinatlari berilgan. Uning tomonlari koordinata o'qiga parallel.
//To'gri to'rtburchakning perimetri va yuzasi aniqlansin.
"use strict";
let x1 = +prompt("Birinchi koordinata o'qi:"),
  x2 = +prompt("Ikkinchi koordinata o'qi:"),
  perimetr = 2 * (x1 + x2),
  s = x1 * x2;
console.log(`Perimetri ${perimetr} ga, yuzasi ${s} ga teng`);
