let n = prompt("Введите число от 2 до n+1");
let i = 2;
let k = 0;
if (n < i) {
		console.log ("Вы ввели число меньше 2");
	}
for (i; i <=n; ) {
	if (i*i <= n && k !=1) {
		if (n % i ==0) {
			k =1;
			i++;
			continue;
				} else {
					i++;
					continue;
				}
	} else if (k ==1) {
		k = 0;
		i = 2;
		console.log ("Составное число");
		break;
			} else {
				i = 2;
				console.log ("Простое число");
				break;
				
			}
}


