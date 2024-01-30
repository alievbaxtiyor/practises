//Temperatura Farengeytda berilgan. Temperatura qiymatini gradus selsiyga o'tkazuvchi programma tuzing.
"use strict";
let faren = +prompt("Qiymat: "),
  gradus = ((faren - 32) * 5) / 9;
console.log("Javob:", gradus);
