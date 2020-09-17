addEventListener(`DOMContentLoaded`, function() {

// Практика_ФОРМЫ_Задача №1 - 
// `Создайте селект с несколькими опциями. Добавьте одну опцию, используя Javascript. 
// Сделайте так, чтобы по выбору опции выводилось сообщение с данными этой опции (текст + значение).`
	let select = document.querySelector(`select`);
	let option =  document.createElement(`option`);
	let form = document.querySelector(`form`);
	option.textContent = `Три`;
	option.setAttribute(`value`, `three`);
	select.append(option);
	form.addEventListener(`change`, function(e) {
		let options = form.list.options;
		for (i = 0; i < options.length; i++) {
			if (options[i].selected) {
				console.log(options[i].text);
				console.log(options[i].value);
			}
		}
	});

// Практика_ФОРМЫ_Задача №2 - 
// `Создайте форму вычисления процентов по вкладу`
	let sum = document.querySelector(`input`);
	let itWas = document.getElementsByClassName(`sum`)[0];
	let term = document.getElementsByClassName(`term`)[0];
	let profit = document.getElementsByClassName(`profit`)[0];
	let cap = document.getElementById(`cap`);
	let diagrOne = document.getElementById(`diagrOne`);
	let diagrTwo = document.getElementById(`diagrTwo`);
	itWas.innerHTML = +sum.value;
	profit.innerHTML = result();

	sum.addEventListener(`input`, calc);
	term.addEventListener(`change`, calc);
	cap.addEventListener(`change`, calc);

	function calc(e) {
		itWas.innerHTML = +sum.value;
		if (cap.checked) {
			profit.innerHTML = resultPlus();
		} else {
			profit.innerHTML = result();
		};
		
		let bufOne = (itWas.innerHTML * (80 / itWas.innerHTML)) + `px`;
		diagrOne.style.height = bufOne;

		let bufTwo = (profit.innerHTML * (80 / itWas.innerHTML)) + `px`;
		diagrTwo.style.height = bufTwo;
		
	};

	function result () {
		percent = Math.round(+sum.value + (sum.value * 0.12 / 12) * +term.value);
		return percent;
	};

	function resultPlus () {
		let percent = +sum.value;
		for (i = 1; i <= +term.value; i++) {
			buf = Math.round(percent + (percent * 0.12 / 12));
			percent = buf; 
		};
		return percent;
	};

	calc();

// Практика_РЕГУЛЯРКИ_Задача №1 - 
// `Создайте регулярное выражение для поиска трёх точек.`
	let threePoint = /(\.){3}/g;
	let str1 = `Жили-были... Дед да Бабка... Ели кашу.. с молоком.`;
	console.log(str1.match(threePoint));

// Практика_РЕГУЛЯРКИ_Задача №2 - 
// `Создайте regexp, который ищет все положительные числа, в том числе десятичные.`
	let positiveNumb = /(?<!\-|\.|\d)(\d+([\.|,]?)\d+)/g;
	let str2 = `Жили-были-5Дед да Бабка +55 Ели кашу по0,5 с молоком-0.3%`;
	console.log(str2.match(positiveNumb));

// Практика_РЕГУЛЯРКИ_Задача №3 - 
// `Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd`
	let serchColor = /#([a-f]{3}){1,2}\b/gi;
	let str3 = `#aaa #aaabbb, #cc1 #dddd #eeeffff`;
	console.log(str3.match(serchColor));

// Практика_РЕГУЛЯРКИ_Задача №4 - 
// `Предложите строку, которая подойдет под выражение ^$`
	let emptyStr = /^$/;
	let str4 = ``;
	console.log(str4.match(emptyStr));

// Практика_РЕГУЛЯРКИ_Задача №5 - 
// `Создайте HTML-форму регистрации с полем пароля. 
// // По клику на кнопку проведите валидацию пароля: 
// // он должен содержать хотя бы одну цифру, 
// // один спецсимвол и одну букву, 
// // а так же быть длиннее 6 знаков. 
// // При прохождении валидации выводить приветственное сообщение, в противном случае - ошибку.`
	
	//Аналогичная задача решена ниже :)

	
// Задача_ДЗ №1 - 
// `Напишите функцию, кот получает любую форму в качестве аргумента и проверяет введённые в форму данные: 
// - в input типа email должен быть введён email, 
// - в input type="tel" — белорусский номер телефона; 
// - пароль долж содерж не менее 8 символов, среди кот есть 1 маленькая, 1 большая буква, 1 цифра и 1 спецсимвол; 
// - самостоятельно добавьте ещё хотя бы две логичные проверки. 
// Все проверки проводить с помощью регулярных выражений. 
// При возникновении ошибок выдавать их пользователю рядом с проверенными полями! 
// Если форма заполнена верно — выдайте приветственное сообщение.`
	let formReg = document.forms.registrationForm;
	let div = document.getElementsByClassName(`form`)[0];
	let label = document.getElementsByClassName(`label`);
	let btn = document.getElementById(`check`);

	let mass = [];
	for (i = 0; i < 5; i++) {
		let err = document.createElement(`div`);
		err.setAttribute(`style`, `color: red; margin: 0 0 0 5px`);
		err.classList.add(`err`);
		mass.push(err);
	};

	btn.addEventListener(`click`, function() {
		for (i = 0; i < formReg.length; i++) {

			if (formReg[i].tagName === `INPUT` && formReg[i].type != `button`) {
				if (/^$/.test(formReg[i].value)) {

					label[i].setAttribute(`style`, `width: 369px`);
					mass[i].textContent = `Поле пустое`;
					label[i].appendChild(mass[i]);
					
				} else {

					if (formReg[i].type === "text") {
						if (/[^a-z]/gi.test(formReg[i].value)) {

							label[i].setAttribute(`style`, `width: 619px`);
							mass[i].textContent = `Логин введён не верно! Только латинские буквы.`
							label[i].appendChild(mass[i]);
						} else {
							label[i].setAttribute(`style`, `width: 280px`);
							mass[i].remove();
						};
					};

					if (formReg[i].type === "email") {
						if (/[-.\w]+@([\w-]+\.)+[\w-]+/gi.test(formReg[i].value)) {
							
							label[i].setAttribute(`style`, `width: 280px`);
							mass[i].remove();
						} else {
							label[i].setAttribute(`style`, `width: 446px`);
							mass[i].textContent = `E-mail введён не верно!`
							label[i].appendChild(mass[i]);
						};
					};

					if (formReg[i].type === "tel") {
						if (/\+375(25|29|33|44)(\d{7})/g.test(formReg[i].value)) {

							label[i].setAttribute(`style`, `width: 280px`);
							mass[i].remove();
						} else {
							label[i].setAttribute(`style`, `width: 600px`);
							mass[i].textContent = `Номер введён не верно! Только операторы РБ.`
							label[i].appendChild(mass[i]);
						};
					};

					if (formReg[i].type === "password") {
						if (/^(?=.{8,})(?=.*[a-zа-яё]+)(?=.*[A-ZА-ЯЁ]+)(?=.*\d+)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+).*$/g.test(formReg[i].value)) {

							label[i].setAttribute(`style`, `width: 280px`);
							mass[i].remove();
						} else {
							label[i].setAttribute(`style`, `width: 630px`);
							mass[i].textContent = `Пароль введён не верно! Пример: 1+A+a+%+ххх8.`
							label[i].appendChild(mass[i]);
						};
					};

					if (formReg[i].type === "password" && formReg[i].id === "psdTwo") {
						if (formReg[i-1].value === formReg[i].value) {

							label[i].setAttribute(`style`, `width: 280px`);
							mass[i].remove();
						} else {
							label[i].setAttribute(`style`, `width: 437px`);
							mass[i].textContent = `Пароли не совпадают!`
							label[i].appendChild(mass[i]);
						};
					};
				};
			};
		};
		if (document.getElementsByClassName(`err`).length === 0) {
			alert(`Форма заполнена верно. Отправить? (OK - для отправки, ESC - для отмены)`);
		};	
	});

// Задача_ДЗ №2 - 
// `Используя регулярные выражения, напишите скрипт, который заменяет слово «функция» в тексте на «function». 
// Если получится, сделайте так, чтобы «функция» заменялась в любом падеже.`
	let funcRepl = /функци(я|и|й|ю|ям|ей|ями|ях)(?=$|[^а-яё])/gi;
	let str5 = `Именительный: функция, функции; 
	Родительный: функции, функций; 
	Детельный: функции, функциям;
	Винительный: функцию, функции; 
	Творительный: функцией, функциями; 
	Предложный: функции, функциях`;
	console.log(str5);
	console.log(str5.replace(funcRepl, `function`));

// Задача_ДЗ №3 -
// `С помощью регулярных выражений определите, является ли строка корректным временем вида '09.59 am', '12.30 pm'.`
	let timeCorr = /\b((0[\d]){1}|(1[0-2]){1})\.([0-5]\d ){1}((am|pm)\b){1}/gi;
	let str6 = `12.59 pm`;
	console.log(str6);
	console.log(timeCorr.test(str6));

// Задача_ДЗ №4 -
// `Удалите одной регуляркой все повторяющиеся слова из строки, например, для 'dsf xxx aaa xxx sd aaa' 
// должно вернуть 'dsf xxx aaa sd'.`
	let delRepl = /(\b[a-z]+\b)(?=(.*\1))[,\s]*/gi;
	let str7 = `one two one three two four three four five six five six seven eight nine eight ten nine ten`;
	console.log(str7);
	console.log(str7.replace(delRepl, ""));

});
