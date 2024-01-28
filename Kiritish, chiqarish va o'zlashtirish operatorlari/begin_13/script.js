//Umumiy markazga bo'lgan ikkita aylana radiusi berilgan. Ularning yuzalari va ularning ayirmasi aniqlansin.
"use strict";
let R1 = +prompt("Birinchi aylana radiusi:"),
  R2 = +prompt("Ikkinchi aylana radiusi:");
const pi = 3.14;
let S1 = pi * R1,
  S2 = pi * R2,
  S3 = pi * (R1 - R2);
console.log(
  `1-aylana yuzi ${S1} , 2-aylana yuzi ${S2} va ularning ayirmasi ${S3}`
);
