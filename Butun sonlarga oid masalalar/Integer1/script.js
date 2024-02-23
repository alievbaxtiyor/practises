//Uzunlik L santimetrda berilgan. Undagi to'liq metrlar sonini aniqlovchi programma tuzilsin (1m=100sm)
"use strict";
const santimetr = 550; // Misol uchun uzunlik santimetrda
const metr = santimetr / 100; // Santimetrni metrga aylantiramiz
const uzunlikMetr = Math.floor(metr); // Metrni butun son ga o'zgartiramiz
console.log("Uzunlik metrlarda:", uzunlikMetr);
