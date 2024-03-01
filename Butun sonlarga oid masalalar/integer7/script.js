//Ikki xonali son berilgan. Uning raqamlari yig'indisi aniqlovchi programma tuzilsin.
"use strict"
let a = +prompt("Ikki xonali son kiriting -> ");
let onlik = Math.floor(a / 10),
    birlik = a % 10,
    sum = onlik + birlik;
    console.log(sum);