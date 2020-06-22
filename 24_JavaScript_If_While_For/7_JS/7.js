let n = prompt("Введите число от 2 до n+1");
let i = 2;
let k = 0;
let j = 2;
for (j; j <=n; j++) {
	for (i; i <=j; ) {
		if (i*i <= j && k !=1) {
			if (j % i ==0) {
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
			break;
				} else {
					console.log (j);
					i = 2;
					break;
				}
	}
}