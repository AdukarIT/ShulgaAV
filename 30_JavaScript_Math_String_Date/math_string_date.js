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