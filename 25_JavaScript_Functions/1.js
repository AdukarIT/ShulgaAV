// Задача №1
// console.log (minOfNumb(-55, 0.1, 20)); 
function minOfNumb (x, y, z) {
	let min = x;
	if (min < y && min < z) { 		
		} else if (y < z) {
			min = y;
				} else {
					min = z;
					}
return min;	
}


// Задача №2
// console.log (sumSecondOfDay(5, 5, 5)); 
function sumSecondOfDay (x, y, z) {
	let sec = (x * 86400) + (y * 3600) + (z * 60);
	return sec;
}


 // Задача №3
 // console.log (argumentType("125"));
 function argumentType (x) {
 	let type = isNaN(x) ? "текст" : "номер";
 	return type; 
 }


// Задача №4
// console.log (longLineCircle(5));
// console.log (areaCircle(5));
function longLineCircle (x) {
	let long = 2 * Math.PI  * x;
	return long;
}
function areaCircle (x) {
	let area = Math.PI  * x**2;
	return area;
}


// Задача №5
// console.log (factorial (5));
function factorial (base) {
	if (base === 2) {
		return base;
	}
	return base * factorial (base - 1)
}


// // Задача №6
// console.log (numberBackwards (1234));
// function numberBackwards (numb) {
// 	let numbr;
// 	let i = 4;
// 	for (i; i <= 1; i--) {
// 		numbr = numbr + Number(Math.trunc(numberBackwards(numb)*i/1000));
// 		}
// 		return numbr;
		
// }