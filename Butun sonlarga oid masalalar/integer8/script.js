//Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.
"use strict"
let a = +prompt("Ikki xonali son kiriting -> "),
    onlik = Math.floor(a / 10),
    birlik = a % 10,
changeNumber = birlik * 10 + onlik;
console.log(changeNumber);