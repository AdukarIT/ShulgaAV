// Задача №1
// let a = +prompt("Введите любое положительное число > 0");
// let b = +prompt("Введите любое положительное число > 0");
// let c = +prompt("Введите любое положительное число > 0");
// console.log(triangle(a, b, c));
function triangle(a, b, c) {
	let triangle = {
		possible: false,
		angles: {
			α: α = Math.round(((Math.acos((b**2 + c**2 - a**2) / (2 * b * c))) / (Math.PI / 180)) * 10) / 10,
			β: β = Math.round(((Math.acos((a**2 + c**2 - b**2) / (2 * a * c))) / (Math.PI / 180)) * 10) / 10,   
			γ: γ = Math.round((180 - (α + β)) * 10) / 10
		}
	};
	if (a < b + c && b < a + c && c < a + b) {
		triangle.possible = true;
	}
	return triangle;
}


// Задача №2
// let str = prompt("Введите любое положительное, целое число или слово или предложение");
// palindrome(str);
function palindrome(str) {
	strNew = str;
	strNew = strNew.toLowerCase();
	let x = strNew.length - 1;
	if (isNaN(strNew) === false) {
		for (let i = 0; i <= x; i++) {
			if (strNew[i] === strNew[x]) {
				x--;
			} else {
				console.log(`Введённое число "${str}" - НЕ палиндром`);
				return;
			}
		}
		console.log(`Введённое число "${str}" - Палиндром`);
	} else {
		for (let i = strNew.length - 1; i >= 0; i--) {
			if (strNew.charCodeAt(i) <= 47 || strNew.charCodeAt(i) >= 58
				&& strNew.charCodeAt(i) <= 64 || strNew.charCodeAt(i) >= 91
				&& strNew.charCodeAt(i) <= 96 || strNew.charCodeAt(i) >= 123
				&& strNew.charCodeAt(i) <= 1039 || strNew.charCodeAt(i) != 1104
				&& strNew.charCodeAt(i) >= 1106 && strNew.charCodeAt(i) <= 65535) {
				strNew = strNew.slice(0, i) + strNew.slice(i + 1);
			}
		}
		let x = strNew.length - 1;
		for (let i = 0; i <= x; i++) {
			if (strNew[i] === strNew[x]) {
				x--;
			} else {
				console.log(`Введённая строка "${str}" - НЕ палиндром`);
				return;
			}
		}
		console.log(`Введённая строка "${str}" - Палиндром`);
	}
}


// Задача №3
// let str = prompt("Введите любое слово или предложение");
// console.log(`В введённой строке "${str}" чаще всего стречается: ${symbolOfString(str)}`);
function symbolOfString(str) {
	strNew = str;
	strNew = strNew.toLowerCase();
	let sumSymbols = [];
	let maxReplayTwo = 0;
	for (let i = 0; i < strNew.length; i++) {
		let maxSymbolReplay = strNew[i];
		let maxReplayOne = 0;
		for (let j = 0; j < strNew.length; j++) {
			if (maxSymbolReplay.charCodeAt() != 32
				&& sumSymbols.indexOf(maxSymbolReplay) === -1 
				&& maxSymbolReplay === strNew[j]) {
				maxReplayOne++;
			}
		}
		if (maxReplayOne > 0 && maxReplayOne >= maxReplayTwo) {
			let buf = maxReplayTwo;
			maxReplayTwo = maxReplayOne;
			sumSymbols = sumSymbols.concat(maxSymbolReplay);
			if (maxReplayOne > buf) {
				sumSymbols.splice(0, sumSymbols.length, maxSymbolReplay);
			}
		}
	} 
	return sumSymbols.join(" ");
}


// Задача №4
// let str = prompt("Введите любое слово или предложение");
// capitalLetter(str);
function capitalLetter(str) {
	str = str.toLowerCase().trim();
	let strNew = str.split('');
	for (let i = 0; i < str.length; i++) {
		for (let j = i - 1; ;) {
			if ( str.charCodeAt(j) >= 97 && str.charCodeAt(j) <= 122
				|| str.charCodeAt(j) >= 1072 && str.charCodeAt(j) <= 1103
				|| str.charCodeAt(j) === 1105) {
				break;
			} else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
						|| str.charCodeAt(i) >= 1072 && str.charCodeAt(i) <= 1103
						|| str.charCodeAt(i) === 1105) {
				strNew[i] = str[i].toUpperCase();
				break;
			} else {
				break;
			}
		}
	}
	console.log(`Все слова с заглавной буквы: "${strNew.join('')}"`);
}


// Задача №5
// let str = prompt("Введите любое слово или предложение");
// duplicateLetters(str);
function duplicateLetters(str) {
	str = str.trim();
	let strNew = str.split('');
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if ( str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
				|| str.charCodeAt(i) >= 1072 && str.charCodeAt(i) <= 1103
				|| str.charCodeAt(i) === 1105) {

				if (str[i].indexOf(str[j]) != -1) {
					strNew[j] = String.fromCharCode(42);
				}
			} else {
				break;
			}
		}
	}
	console.log(`Все повторяющиеся буквы заменены на * => "${strNew.join('')}"`);
}


// Задача №6
// console.log(weekDayRus());
function weekDayRus(now = new Date()) {
	let dayRus = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	return `текущий день недели => ${dayRus[now.getDay()]}`;
}


// Задача №7
// let date = prompt(`Введите дату в формате "ДД-ММ-ГГГГ"`);
// console.log(`В введённой дате "${date}" ${weekDayInDate()}`);
function weekDayInDate() {
	let dateArr = date.split("-").reverse();
	return weekDayRus(new Date(dateArr));
}


// Задача №8.1
// let date = prompt(`Введите дату своего рождения в формате "ДД-ММ-ГГГГ"`);
// console.log(`Количество дней до следующего Дня Рождения => ${daysFromBirthday()}`);
function daysFromBirthday() {
	let now = new Date();
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	let dateArr = date.split("-").reverse();
	let dateNew = new Date(dateArr);
	dateNew.setFullYear(now.getFullYear());
	if (now.getTime() < dateNew.getTime()) {
		return Math.floor((dateNew.getTime() - now.getTime()) / 86400000);
	} else {
		dateNew.setFullYear(dateNew.getFullYear() + 1);
		return Math.floor((dateNew.getTime() - now.getTime()) / 86400000);
	}
	
}


// Задача №8.2
// console.log(`Дата ближайшего 1000-дневного юбилея => "${jubilee()}"`);
function jubilee() {
	let now = new Date();
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	let dateArr = date.split("-").reverse();
	let dateNew = new Date(dateArr);
	let days = Math.floor((now.getTime() - dateNew.getTime()) / 86400000);
	let buf = days;
	while (buf % 1000 > 0) {
		if (buf % 1000 != 0) {
			buf += 1;
		}
	}
	let dateJubilee = new Date(now.getTime() + ((buf - days) * 86400000));
	console.log(`Вам скоро исполнится => ${buf} дней`);
	return dateJubilee.toDateString();
	
}
