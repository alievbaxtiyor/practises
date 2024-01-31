//Qayiqning tezligi V km/soat, daryo oqimining tezligi U km/soat.
//Qayiqning daryo oqimi bo'yicha harakatlanish vaqti T1, oqimga qarshi T2.
//Qayiqni yurgan S yo'lini aniqlovchi programma tuzilsin.
"use strict";
let speedBoat = +prompt("Qayiqning tezligini kiriting: "),
  speedRiver = +prompt("Daryoning tezligini kiriting: "),
  timeRoad = +prompt("Vaqtini kiriting: "),
  lengthRoad = (speedBoat - speedRiver) * timeRoad;
console.log("Yurgan yo'li", lengthRoad);
