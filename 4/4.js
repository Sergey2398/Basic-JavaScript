"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (i = 0; i < 20; i++, console.log('x'.repeat(i))) {}


let pyramid = '';
for (i = 1; i <= 20; i++) {
  for (j = 0; j < i; j++) {
    pyramid += 'x';
  }
  pyramid += '\n';
}
console.log(pyramid);