"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const userNumber = +prompt('Введите ваше число');

function exponent(num) {
  return num ** 3;
}

console.log(exponent(userNumber));