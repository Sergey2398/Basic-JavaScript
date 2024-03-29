"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const weekDayObject = {};
for (let i = 0; i < en.length; i++) {
  weekDayObject[en[i]] = ru[i];
}

console.log(weekDayObject);

// Альтернативное решение в виде функции 

function construct(arr1, arr2) {
  if (arr1.length !== arr2.length || arr1.length === 0 || arr2.length === 0) {
    return {};
  }
  const weekDayObject = {};
	for (let i = 0; i < arr1.length; i++) {
		weekDayObject[arr1[i]] = arr2[i];
	}
  return weekDayObject;
}
console.log(construct(en, ru));
