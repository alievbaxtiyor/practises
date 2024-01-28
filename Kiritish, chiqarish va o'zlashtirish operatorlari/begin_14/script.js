//Ayalaning uzunligi L berilgan. UNing radiusi R va yuzasi S aniqlansin
"use strict";
let L = +prompt("Aylananing uzunligini kiriting:");
const pi = 3.14;
let R = L / (2 * pi),
  S = pi * Math.pow(R, 2);
console.log(`Aylananing radiusi ${R} , yuzasi ${S}`);
