// Задача №3
// let grade = +prompt ("Введите оценку по 10-ти бальной шкале от 10 до 100");
// switch (grade) {
// 	case "10":
// 	case "20":
// 		console.log("Неудовлетворительно");
// 		break;
// 	case "30":
// 	case "40":
// 		console.log("Удовлетворительно");
// 		break;
// 	case "50":
// 		console.log("Почти хорошо");
// 		break;
// 	case "60":
// 		console.log("Хорошо");
// 		break;
// 	case "70":
// 		console.log("Очень хорошо");
// 		break;
// 	case "80":
// 		console.log("Почти отлично");
// 		break;
// 	case "90":
// 		console.log("Превосходно");
// 		break;
// 	case "100":
// 		console.log("Блестяще");
// 		break;
// 	default:
// 		console.log("Вы ввели неверное значение");
// 		break;
// }


// Задача №4
// let month = +prompt ("Введите любой номер месяца в году");
// switch (month) {
// 	case "12":
// 	case "1":
// 	case "2":
// 		console.log("Зима");
// 		break;
// 	case "3":
// 	case "4":
// 	case "5":
// 		console.log("Весна");
// 		break;
// 	case "6":
// 	case "7":
// 	case "8":
// 		console.log("Лето");
// 		break;
// 	case "9":
// 	case "10":
// 	case "11":
// 		console.log("Осень");
// 		break;
// 	default:
// 		console.log("Вы ввели неверное значение");
// 		break;
// }


// Задача №6
// let numb = 0;
// let sum = 0;
// let i = 0;
// do {
// 	let numb = +prompt ("Введите любое число < 100");
// 	sum = sum + numb;
// 	i++;
// } while (sum < 100);
// console.log (sum);
// alert("Количество введённых чисел = " + i);


// Задача №8
// let student = +prompt ("Введите количество учеников в классе");
// let desks = +prompt ("Введите количество парт в классе");
// console.log (numbDesks(student, desks)); 
// function numbDesks(student, desks) {
// 	if (student == 1 && student < desks) {
// 		return ("лишних парт: " + (desks - student));
// 	} else if (student == 2 && student <= desks) {
// 		return ("лишних парт: " + (((desks * 2) - student)) / 2);
// 	} else if (student >= 3 && student <= desks || student >= desks) {
// 		let desk = Math.floor((((desks * 2) - student)) / 2);
// 		if (desk > 0) {
// 			return ("лишних парт: " + desk);
// 		} else if (desk == 0) {
// 			return ("парт хватает на всех учеников");
// 		} return ("не хватает парт: " + Math.abs(desk));
// 	}	
// }


// Задача №9
// let numb = +prompt ("Введите любое целое число");
// console.log (words(numb)); 
// function words(numb) {
// 	if (numb % 10 == 1) {
// 		return (`${numb} карандаш`);
// 	} else if (numb % 10 == 2 || numb % 10 == 3 || numb % 10 == 4) {
// 		return (`${numb} карандаша`);
// 	} else {
// 		return (`${numb} карандашей`);
// 	}
// }


// Задача №11
// let numb = prompt ("Введите любое число");
// console.log +(divide(numb));
// function divide(numb) {
// 	for (let i = 1; i <= numb; i++) {
// 		if (numb % i == 0) {
// 			console.log (i);
// 		} 
// 	}
// }



	