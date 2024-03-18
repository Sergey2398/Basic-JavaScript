"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function salary(money) {
	console.log(Math.round(money * 0.87));
}

const userMoney = +prompt('Введите ваше число');

if (userMoney !== Number(userMoney)) {
  console.log('Значение задано неверно');
} else {
  salary(userMoney);
}

