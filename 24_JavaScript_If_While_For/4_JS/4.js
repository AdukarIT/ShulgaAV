let x = prompt ("Введите число от 1 до 20")
let i;
for (i = 1; i <= 10; i = i + 1) {
	if (x >= 1 && x <= 20) {
		let result = x * i;
	console.log(x + ":" + " " + x + " x " + i + " = " + result);
	} else {
		console.log("введите число от 1 до 20");
	}
}