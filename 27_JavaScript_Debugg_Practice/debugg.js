// Задача №3
// let x = +prompt("Введите оценку по 10-ти бальной шкале от 10 до 100");
// grade(x);
// function grade(x) {
// 	switch (x) {
// 		case 10:
// 		case 20:
// 			console.log("Неудовлетворительно");
// 			break;
// 		case 30:
// 		case 40:
// 			console.log("Удовлетворительно");
// 			break;
// 		case 50:
// 			console.log("Почти хорошо");
// 			break;
// 		case 60:
// 			console.log("Хорошо");
// 			break;
// 		case 70:
// 			console.log("Очень хорошо");
// 			break;
// 		case 80:
// 			console.log("Почти отлично");
// 			break;
// 		case 90:
// 			console.log("Превосходно");
// 			break;
// 		case 100:
// 			console.log("Блестяще");
// 			break;
// 		default:
// 			console.log("Вы ввели неверное значение");
// 			break;
// 	}
// }


// Задача №4
// let x = +prompt ("Введите любой номер месяца в году");
// month(x);
// function month(x) {
// 	switch (x) {
// 		case 12:
// 		case 1:
// 		case 2:
// 			console.log("Зима");
// 			break;
// 		case 3:
// 		case 4:
// 		case 5:
// 			console.log("Весна");
// 			break;
// 		case 6:
// 		case 7:
// 		case 8:
// 			console.log("Лето");
// 			break;
// 		case 9:
// 		case 10:
// 		case 11:
// 			console.log("Осень");
// 			break;
// 		default:
// 			console.log("Вы ввели неверное значение");
// 			break;
// 	}
// }


// Задача №6
// let a = numb();
// console.log(`Количество введённых чисел = ${a}`);
// function numb(x) {
// 	let sum = 0;
// 	let i = 0;
// 	do {
// 		let x = +prompt(`Введите любое число < 100`);
// 		sum = sum + x;
// 		i++;
// 	} while (sum < 100);
// 	console.log (`Сумма введённых чисел = ${sum}`);
// 	return(i);
// }


// Задача №8
// let student = +prompt (`Введите количество учеников в классе`);
// let desks = +prompt (`Введите количество парт в классе`);
// console.log (numbDesks(student, desks)); 
// function numbDesks(student, desks) {
// 	let desk = Math.floor((((desks * 2) - student)) / 2);
// 	if (desk > 0) {
// 		return (`лишних парт: ${desk}`);
// 	} else if (desk == 0) {
// 		return (`парт хватает на всех учеников`);
// 	} return (`не хватает парт: ${Math.abs(desk)}`);
// }


// Задача №9
// let numb = +prompt (`Введите любое целое число`);
// console.log (words(numb)); 
// function words(numb) {
// 	if (numb % 10 == 1 && numb % 100 != 11) {
// 		return (`${numb} карандаш`);
// 	} else if (
// 		numb % 10 == 2 && numb % 100 != 12 
// 		|| numb % 10 == 3 && numb % 100 != 13
// 		|| numb % 10 == 4 && numb % 100 != 14) {
// 		return (`${numb} карандаша`);
// 	} else {
// 		return (`${numb} карандашей`);
// 	}
// }


// Задача №11
// let numb = +prompt ("Введите любое число");
// divide(numb);
// function divide(numb) {
// 	let max = 0;
// 	for (let i = 1; i * i <= numb; i++) {
// 		if (numb % i == 0) {
// 			console.log(i);
// 			max = i;
// 			if (max < i) {
// 				max = i;
// 			}
// 		} 
// 	}
// 	for (max; max >= 1; max--) {
// 		if (numb % Math.floor(numb / max) == 0 && max != (numb / max)) {
// 			console.log(numb / max);
// 		}
// 	}
// }


// Задача №12
// let x = +prompt ("Введите число <= 162");
// sumSquared(x);
// function sumSquared(x) {
// 	if (x > 162 || isNaN(x)) {
// 		console.log (`Вы ввели неверное значение`)
// 		return;
// 	}
// 	for (let i = 1; i <= x && i <= 9; i++){
// 		for (let j = 1; j <= x && j <= 9; j++){
// 			if ((i * i) + (j * j) === x) {
// 			console.log (`введённое число "${x}" - можно представить в виде суммы квадратов двух целых однозначных чисел: (${i} * ${i}) + (${j} * ${j})`);
// 			return;
// 			} continue;
// 		} continue;
// 	} console.log (`введённое число "${x}" - НЕВОЗМОЖНО представить в виде суммы квадратов двух целых однозначных чисел`);
// }

	