//Birinchi avtomobilning tezligi V1 km/soat, ikkinchisiniki V2 km/soat, ular orasida maso
//Ular bir-biri tomonga harakatlana boshlasa T vaqtdan keyin ular orasidagi masofani aniqlovchi
"use strict";
let firstCarSpeed = +prompt("Birinchi avtomobilning tezligi: "),
  secondCarSpeed = +prompt("Ikkinchi avtomobilning tezligi: "),
  carsOfTime = +prompt("Vaqt: "),
  carsOfRoad = Math.abs(
    firstCarSpeed * carsOfTime + secondCarSpeed * carsOfTime
  );
console.log(`Ular orasidagi masofa ${carsOfRoad}`);
