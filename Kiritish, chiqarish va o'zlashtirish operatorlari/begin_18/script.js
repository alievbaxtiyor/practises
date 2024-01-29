//Sonlar o'qida A,B,C nuqtalar berilgan. C nuqta A va B nuqtalar orasida joylashgan. AC va BC kesmalar uzunligining ko'paytmasini toping.
"use strict";
let a = +prompt("A nuqtani qiymatini kiriting"),
  c = +prompt("C nuqtani qiymatini kiriting"),
  b = +prompt("B nuqtani qiymatini kiriting"),
  ac = c - a,
  bc = b - c,
  sumAll = ac * bc;
console.log(`Ko'paytmasi ${sumAll}`);
