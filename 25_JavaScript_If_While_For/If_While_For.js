// // Задача №1
// let x = prompt ("Введите № своей квартиры");
// if (isNaN(x) || (x < 1 || x > 60)) {
// 	alert("введите число от 1 до 60");
// } else if (x >= 1 && x <= 20) {
// 	console.log("Подъезд №1");
// } else if (x >= 21 && x <= 40) {
// 	console.log("Подъезд №2");
// } else {
// 	console.log("Подъезд №3");
// } 


// // Задача №2
// let x = prompt ("Введите марку Вашего автомобиля");
// switch (x) {
// 	case "BMW":
// 	case "Audi":
// 	case "Volkswagen":
// 		console.log(x + " - made in Germany");
// 		break;
// 	case "LADA":
// 		console.log(x + " - made in Russia");
// 		break;
// 	case "Ford":
// 		console.log(x + " - made in USA");
// 		break;
// 	case "Geely":
// 		console.log(x + " - made in China");
// 		break;
// 	case "Peugeot":
// 		console.log(x + " - made in France");
// 		break;
// 	default:
// 		console.log(x + " - made in unknown");
// 		break;
// }


// // Задача №3
// let x = prompt ("Введите год своего Рождения");
// if ((x % 4 === 0 && x % 100 !== 0) || (x % 400 === 0)) {
// 	console.log("Вы родились в Високосный год 366 дней");
// } 
// else {
// 	console.log("Вы родились в НE високосный год 365 дней");
// }


// // Задача №4
// let x = prompt ("Введите число от 1 до 20")
// let i;
// for (i = 1; i <= 10; i = i + 1) {
// 	if (x >= 1 && x <= 20) {
// 		let result = x * i;
// 	console.log(x + " x " + i + " = " + result);
// 	} else {
// 		console.log("введите число от 1 до 20");
// 	}
// }


// // Задача №5
// let x = 0;
// let y = 1;
// let z = 1;
// let n;
// for (n = 1; n <= 5;n = n + 1) {
// console.log(x);
// console.log(y);
// console.log(z);
// x = y + z;
// y = x + z;
// z = x + y;
// }


// // // Задача №6
// let n = prompt("Введите число от 2 до n+1");
// if (n < 2) {
// 	console.log ("Вы ввели число меньше 2");
// } else {
// 	let isPrime = true;
// 	for (let i = 2; i*i <= n; i++) {
// 		if (n % i == 0) {
// 			console.log ("Составное число");
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	if (isPrime) {
// 		console.log ("Простое число");
// 	}
// }


// // // Задача №7
// let n = prompt("Введите число от 2 до n+1");
// for (let j = 2; j <=n; j++) {
// 	let isPrime = true;
// 	for (let i = 2; i*i <= j; i++) {
// 		if (j % i == 0) {
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	if (isPrime) {
// 		console.log (j);
// 	}
// }