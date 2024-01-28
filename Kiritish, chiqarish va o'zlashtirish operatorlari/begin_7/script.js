//Doiraning radiusi berilgan R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
"use strict";
let R = +prompt("Radiusini kiriting:");
const pi = 3.14;
let L = 2 * pi * R,
  S = pi * Math.pow(R, 2);
console.log(`Doiraning uzunligi ${L} ga va yuzasi ${S} ga teng`);
