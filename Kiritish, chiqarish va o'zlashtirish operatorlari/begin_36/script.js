//Birinchi avtomobilning tezligi V1 km/soat, ikkinchisiniki V2 km/soat, ular orasida masofa S.
//Ular bir-biridan uzoqlasha boshlasa T vaqtdan keyin ular orasidagi masofani aniqlovchi programma tuzilsin.
"use strict";
let firstCarSpeed = +prompt("Birinchi avtomobilning tezligi: "),
  secondCarSpeed = +prompt("Ikkinchi avtomobilning tezligi: "),
  carsOfTime = +prompt("Vaqt: "),
  carsOfRoad = Math.abs(
    firstCarSpeed * carsOfTime - secondCarSpeed * carsOfTime
  );
console.log(`Ular orasidagi masofa ${carsOfRoad}`);
