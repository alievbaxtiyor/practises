//Uzunlik L santimetrda berilgan. Undagi to'liq metrlar sonini aniqlovchi programma tuzilsin (1m=100sm)
"use strict"
function metrlar(uzunlik) {
  var metr = Math.floor(uzunlik / 100); // Uzunlikni santimetrda metrlarga ajratamiz
  return metr;
}

// Misol uchun
var uzunlik = 350; // Santimetrda uzunlik
var metr_son = metrlar(uzunlik);
console.log(metr_son + " metr");
