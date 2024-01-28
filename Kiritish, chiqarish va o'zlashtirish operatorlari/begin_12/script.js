//To'g'ri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
"use strict";
let a = +prompt("Uchurchak a tomonini kiritng:"),
  b = +prompt("Uchburchak b tomonini kiriting:"),
  C = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)),
  P = a + b + C;
console.log(`Uchuburchakning gipotenuzasi ${C} ga va perimetri ${P} ga teng`);
