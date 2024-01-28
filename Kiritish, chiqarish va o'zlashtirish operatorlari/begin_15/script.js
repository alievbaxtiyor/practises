//Aylananing yuzasi S berilgan. Uning diametri d va radiusi R aniqlansin.
"use strict";
let S = +prompt("Aylananing yuzasini kiriting:");
const pi = 3.14;
let R = Math.sqrt(S / pi),
  L = 2 * pi * R;
console.log(`Aylaning radiusi ${R} , uzunligi ${L}`);
