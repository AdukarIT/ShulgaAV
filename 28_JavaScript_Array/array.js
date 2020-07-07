// Задача №1
let len = +prompt("Введите любое положительное число > 2");
let arr = getRandomArray(len);
function getRandomArray(len) {
	let arr = [];
	for (let i = 0; i < len; i++) {
		arr[i] = +Math.random().toFixed(3);
	}
	return arr;
}
console.log(`Задача №1:`)
console.log(`	Рандомный массив №1 длинной "${len}" чисел => ${arr.join(" | ")}`);


// Задача №2
let averageArray = arr;
average(averageArray);
function average(averageArray) {
	let sum = 0;
	for (let i = 0; i < averageArray.length; i++) {
		sum = sum + +averageArray[i].toFixed(3)
	}
	let average = sum / averageArray.length;
	console.log(`Задача №2:`)
	console.log(`	Среднее арифметическое всех чисел массива = "${average.toFixed(3)}"`);
	for (let i = 0; i < averageArray.length; i++) {
		if (averageArray[i] > average) {
			console.log(`	Элемент массива = "${averageArray[i]}" > "${average.toFixed(3)}"`);
		}
	}
}


// Задача №3
let minArray = arr;
minArr(minArray);
function minArr(minArray) {
	let minOne = minArray[0];
	for (let i = 0; i < minArray.length; i++) {
		if (minOne > minArray[i]) {
			minOne = minArray[i];
		}
	}
	let minTwo = minArray[0];
	for (let i = 0; i < minArray.length; i++) {
		if (minTwo == minOne) {
			minTwo = minArray[i];
		}
	}
	for (let i = 0; i < minArray.length; i++) {
		if (minArray[i] > minOne && minArray[i] < minTwo) {
			minTwo = minArray[i];
		}
	}
	console.log(`Задача №3:`)
	console.log(`	Наименьший элемент массива = "${minOne}"`);
	console.log(`	Следующий наименьший элемент массива = "${minTwo}"`);
}


// Задача №4
let delElem = [];
for (i = 0; i < arr.length; i++) {
	delElem[i] = arr[i];
}
delElementArray(delElem);
function delElementArray(delElem) {
	let min = 0.3;
	for (let i = 0; i < delElem.length; i++) {
		if (min > delElem[i]) {
			delElem[i] = 0;
		}
	}
	console.log(`Задача №4:`)
	console.log(`	Рандомный массив №1 длинной "${len}" => ${arr.join(" | ")}`);
	console.log(`	Обнуление чисел массива < "${0.3}"  =>  ${delElem.join(" | ")}`);
	for (let i = 0; i < delElem.length; i++) {
		if (delElem[i] == 0) {
			for (let j = i + 1; j < delElem.length; j++) {
				if (delElem[j] != 0) {
					delElem[i] = delElem[j];
					delElem[j] = 0;
					break;
				}
			}
		}
	}
	console.log(`	Сдвиг влево чисел массива > "${0.3}"  =>  ${delElem.join(" | ")}`);
}


// Задача №5
let sumElem = arr;
let arrSum = [];
let arrTwo = getRandomArray(len);
sumElementArrays(sumElem);
function sumElementArrays(sumElem) {
	console.log(`Задача №5:`);
	console.log(`	Рандомный массив №1 длинной "${len}" чисел => ${arr.join(" | ")}`);
	console.log(`	Рандомный массив №2 длинной "${len}" чисел => ${arrTwo.join(" | ")}`);
	for (let i = 0; i < sumElem.length; i++) {
		for (let j = arrTwo.length - i - 1; j > -1; j--) {
			arrSum[i] = +(sumElem[i] + arrTwo[j]).toFixed(3);
			break;
			}
		}
	console.log(`	Суммарный массив №3 длинной "${len}" чисел => ${arrSum.join(" | ")}`);
}

// Задача №6
let sortArr = [];
for (i = 0; i < arr.length; i++) {
	sortArr[i] = arr[i];
}
sortArrayMethodBubble(sortArr);
function sortArrayMethodBubble(sortArr) {
	console.log(`Задача №6:`);
	console.log(`	Рандомный массив №1 длинной "${len}" чисел => ${sortArr.join(" | ")}`);
	for (let n = 0; n < sortArr.length; n++) {
		for (let i = 0; i < sortArr.length; i++) {
			for (let j = i + 1; j < sortArr.length; j++) {
				if (sortArr[i] > sortArr[j]) {
					let buf = sortArr[j];
					sortArr[j] = sortArr[i];
					sortArr[i] = buf;
					break;
				}
				break;
			}
		}
	}
	console.log(`	Сортировка методом пузырька массива №1 => ${sortArr.join(" | ")}`);			 
}


// Задача №7*
let equalOne = arr;
sumElemArrApproxEqualOne(equalOne);
function sumElemArrApproxEqualOne(equalOne) {
	console.log(`Задача №7*:`);
	console.log(`	Рандомный массив №1 длинной "${len}" чисел => ${equalOne.join(" | ")}`);
	let sum;
	for (let i = 0; i < equalOne.length; i++) {
		for (let j = i + 1; j < equalOne.length; j++) {
			sum = +(equalOne[i] + equalOne[j]).toFixed(3);
			if (sum > 0.999 && sum < 1.001) {
				console.log(`	Сумма чисел массива №1 => ${equalOne[i]} + ${equalOne[j]} = ${sum}`);
			}
		}
	}
}


// Задача №8*
let maxElem = [];
for (i = 0; i < arr.length; i++) {
	maxElem[i] = arr[i];
}
maxElemArray(arr);
function maxElemArray(arr) {
	console.log(`Задача №8*:`);
	console.log(`	Рандомный массив №1 длинной "${len}" чисел => ${arr.join(" | ")}`);
	let maxOne = 0;
	for (let n = 1; n < maxElem.length + 1; n++) {
		for (let i = 0; i < maxElem.length; i++) {
			for (let j = 0; j < maxElem.length; j++) {
				if (maxOne < maxElem[j] && maxOne < 1 && maxElem[j] < 1) {
					maxOne = maxElem[j];
				}
			}
			if (maxElem[i] == maxOne) {
				maxElem[i] = n;
				maxOne = 0;
				break;
			}
		}
	}
	console.log(`	MAX элементы массива №1 по возрастанию =>   ${maxElem.join("   |   ")}`);
}


// Задача №9*
let rightShift = [];
for (i = 0; i < arr.length; i++) {
	rightShift[i] = arr[i];
}
let x = +prompt("Введите любое положительное число <= длинне массива");
rightShiftArray(rightShift, x);
function rightShiftArray(rightShift, x) {
	console.log(`Задача №9*:`);
	console.log(`	Рандомный массив №1 длинной "${len}" чисел => ${arr.join(" | ")}`);
	for (let i = 0; i < arr.length - x; i++) {
		rightShift[i + x] = arr[i];
	}
	for (let j = arr.length - 1; j >= arr.length - x; j--) {
		rightShift[arr.length - j - 1] = arr[j];
	}
	console.log(`	Сдвиг массива №1 вправо на "${x}" поз.   => ${rightShift.join(" | ")}`);
}