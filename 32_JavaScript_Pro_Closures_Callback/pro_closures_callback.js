// Задача №3_ПРАКТИКА_ЧАСТЬ_№1
// let bigStr = `Разбейте текст этой задачи на отдельные слова, 
// удаляя по пути точки и запятые, а полученные слова сложите в массив. 
// Напишите функцию, которая возвращает массив из тех же слов, но 
// развёрнутых задом наперёд, причём массив должен быть отсортирован по 
// количеству букв в слове. Напишите другую функцию, которая считает 
// общее количество букв «с» во всех элементах массива.`

// for (let i = bigStr.length - 1; i >= 0; i--) {
// 	if (bigStr.charCodeAt(i) >= 0 && bigStr.charCodeAt(i) <= 31
// 		|| bigStr.charCodeAt(i) >= 33 && bigStr.charCodeAt(i) <= 47 
// 		|| bigStr.charCodeAt(i) >= 58 && bigStr.charCodeAt(i) <= 64 
// 		|| bigStr.charCodeAt(i) >= 91 && bigStr.charCodeAt(i) <= 96 
// 		|| bigStr.charCodeAt(i) >= 123 && bigStr.charCodeAt(i) <= 1039 
// 		|| bigStr.charCodeAt(i) != 1104 && bigStr.charCodeAt(i) >= 1106 
// 		&& bigStr.charCodeAt(i) <= 65535) {
// 		bigStr = bigStr.slice(0, i) + bigStr.slice(i + 1);
// 	}
// }

// let wordsInArr = bigStr.split(" ");


// Задача №1
// let str = prompt("Введите любую букву кириллического алфавита");
// console.log(countLetter(wordsInArr));
// function countLetter() {
// 	 return wordsInArr.reduce(function(count, word) {
// 	 	let letterSmall = word.toLowerCase();
// 	 	for (let i = 0; i < letterSmall.length; i++) {
// 	 		if (letterSmall[i] === str) {
// 	 			count++;
// 	 		}
// 	 	}
// 	 	return count;
// 	 }, 0);
// } 


// Задача №2
// let countOfLetter = currying('с');
// console.log(countOfLetter());
// function currying(str) {
// 	function countLetter() {
// 	 return wordsInArr.reduce(function(count, word) {
// 	 	let letterSmall = word.toLowerCase();
// 	 	for (let i = 0; i < letterSmall.length; i++) {
// 	 		if (letterSmall[i] === str) {
// 	 			count++;
// 	 		}
// 	 	}
// 	 	return count;
// 	 }, 0);
// 	}
// 	return countLetter;
// }


// Задача №3
// function populationTexasUp(item, index, arr) {
//     if (item.state === "Texas" && parseInt(item.growth_from_2000_to_2013) > 0) {
//         return item.city;
//     }
// }
// let filterPopulationTexasUp = data.filter(populationTexasUp);
// console.log(filterPopulationTexasUp);


// Задача №4
// function populationCitySum(item, index, arr) {
//     if (item.longitude > -120 && item.longitude < -110) {
//         return sum = sum + parseInt(item.population);
//     }
// }
// let sum = 0;
// let filterPopulationCitySum = data.filter(populationCitySum);
// console.log(sum);


// Задача №5
// function cityNameBeginS(item, index, arr) {
//     if (item.city[0] === "S") {
//         return item.city;
//     }
// }

// let arrCityNameBeginS = data.filter(cityNameBeginS);

// function sortNameState(obj1, obj2) {
//     if (obj1.state < obj2.state) {
//         return -1;
//     } else if (obj1.state > obj2.state) {
//         return 1;
//     } else {
//     	return 0;
//     } 
// }

// console.log(arrCityNameBeginS.sort(sortNameState));


// Задача №6
// let everyObjPropToArr = data.reduce(unique, {});
// function unique(elem, obj) {

// 	let newObj = {};
// 	newObj.name = obj.state;

// 	elem[newObj.name] = [];
// 	return elem;
// };

// let toEveryCityAddObjWithProp = data.reduce(city, {});
// function city(elem, obj) {

// 	everyObjPropToArr[obj.state].push(obj.city);

// 	everyObjPropToArr[obj.state].forEach(function(elem,index, arr) {
// 	arr[elem] = {
// 		population: obj.population,
// 		rank: obj.rank
// 	};
// });
// 	everyObjPropToArr[obj.state].splice(0, 1);

// 	return everyObjPropToArr;
// };
// console.log(toEveryCityAddObjWithProp);


// Задача №6 - Хотел сделать короче, но есть НЮАНС с перезаписью 
// let everyObjPropToArr = data.reduce(unique, {});
// function unique(elem, obj) {

// 	let newObj = {};
// 	let arr = [1];
	
// 	newObj.name = obj.state;

// 	arr.forEach(function(elem,index, arr) {
// 		arr[obj.city] = {
// 			population: obj.population,
// 			rank: obj.rank
// 		};

// 		arr.splice(0, 1);

// 	});

// 	elem[newObj.name] = arr;

// 	return elem;
// };

// console.log(everyObjPropToArr);


// Задача №7
// let arrCityUSAwithClubsNHL = [];
// let newObjWithClubsNHLinUSA = data.reduce(uni, {});
// function uni(elem, obj) {
// 	teams.find(function(stateAndCity) {
// 		if(stateAndCity.state === obj.state && stateAndCity.city === obj.city) {
// 			elem[obj.city] = {
// 				state: obj.state,
// 				name: stateAndCity.name,
// 				firstYearOfPlay: stateAndCity.firstYearOfPlay
// 			};
// 		};
// 	});
// 	arrCityUSAwithClubsNHL.forEach(function(elems,index, arr) {
// 		arr = elem;
// 	});
// 	return arrCityUSAwithClubsNHL;
// };
// console.log(newObjWithClubsNHLinUSA);
