//Berilgan A va B sonlarning qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.
"use strict";
let a = +prompt("Birinchi sonni kiriting:"),
  b = +prompt("Ikkinchi sonni kiriting:"),
  temp = a;
a = b;
b = temp;
console.log(`Birinchi sonning yangi qiymati ${a}`);
console.log(`Ikkinchi sonning yangi qiymati ${b}`);
