//A,B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin.
"use strict";
let a = +prompt("A ning qiymatini kiriting: "),
  b = +prompt("B ning qiymatini kiriting: "),
  c = +prompt("C ning qiymatini kiriting: ");
let tempA = a;
a = c;
let tempB = b;
b = tempA;
c = tempB;

console.log(`A ning yangi qiymati ${a}`);
console.log(`B ning yangi qiymati ${b}`);
console.log(`C ning yangi qiymati ${c}`);
