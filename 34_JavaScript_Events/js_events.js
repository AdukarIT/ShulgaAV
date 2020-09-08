addEventListener(`DOMContentLoaded`, function() {

	// Практика_Задача №1 - `Создайте поле ввода, сделайте с помощью JS так, 
	// чтобы в него можно было вводить только числовые значения.`
	let input = document.createElement(`input`);
	input.setAttribute(`type`, 'text');
	input.setAttribute(`placeholder`, `Практ_№1 - Only numb`);
	input.style.margin = `5px 0 0 5px`;
	document.body.appendChild(input);
	input.addEventListener(`keydown`, function(e) {
		if (isNaN(e.key)) {
			e.preventDefault();
		};
	});

	// Практика_Задача №2 - `Создайте блок div, в качестве изображения фона 
	// установите ему изображение закрытой папки. Добавьте событие, которое выполняется 
	// при двойном клике на блоке и заменяет фон блока на изображение открытой папки.`
	let div = document.createElement(`div`);
	div.setAttribute(`style`, 'width: 256px; height: 256px; background-image: url(IMG/close.ico)');
	document.body.appendChild(div);
	div.addEventListener(`dblclick`, function(e) {
		e.currentTarget.style.backgroundImage = `url(IMG/open.ico)`;
	});

	// ДЗ_Задача №1 - 'Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте инпут.'
	let btn = document.createElement(`button`);
	btn.textContent = `Нажми на меня для решения ДЗ №1`;
	document.body.appendChild(btn);
	btn.addEventListener(`mousedown`, function(e) {
		let inp = document.createElement(`input`);
		inp.style.margin = `5px 0 0 5px`;
		inp.setAttribute(`placeholder`, `ДЗ_№1 - Copy input`);
		document.body.appendChild(inp);
		input.after(inp);
		});

	// ДЗ_Задача №2 - 'Добавьте на страницу таблицу в стандартном оформлении. Создайте три класса для этой таблицы: 
	// bordered (с границами вокруг всех ячеек), 
	// striped (разные цвета для чётных и нечётных строк), 
	// highlight (оформление стандартное, но при наведении на ячейку текст в ней меняет цвет). 
	// При первом клике на таблице добавьте ей класс bordered, 
	// при втором клике удалите класс bordered и добавьте класс striped, 
	// при третьем клике удалите класс striped и добавьте класс highlight. 
	// Четвёртый и последующие клики запускают «карусель классов» по второму кругу.'
	let tabl = document.querySelector(`table`);
	document.body.appendChild(tabl);
	let cell = document.querySelectorAll('td');
	let row = document.querySelectorAll(`tr`);
	let click = 0;
	function styleTable(e) {
		click++;
		if (click === 1) {
			tabl.classList.add(`bordered`);
			tabl.removeEventListener(`mousemove`, highlight);
			cell.forEach(function(elem,index,arr) {
				if (elem.classList.contains(`highlight`)) {
					elem.classList.remove(`highlight`);
				}
				if (!elem.classList.contains(`bordered`)) {
					elem.classList.add(`bordered`);
				}
			});
			row.forEach(function(elem,index,arr) {
				if (arr[index].classList.contains(`striped`)) {
					if (index != 0 && index % 2 !=0) {
						arr[index].classList.remove(`striped`);
					}
				}
			});
		} else if (click === 2) {
			tabl.removeEventListener(`mousemove`, highlight);
			cell.forEach(function(elem,index,arr) {
				if (elem.classList.contains(`highlight`)) {
					elem.classList.remove(`highlight`);
				}
				if (elem.classList.contains(`bordered`)) {
					elem.classList.remove(`bordered`);
				}
			});
			row.forEach(function(elem,index,arr) {
				if (index != 0 && index % 2 !=0)
				arr[index].classList.add(`striped`);
			});
		} else if (click === 3) {
			tabl.classList.add(`bordered`);
			tabl.addEventListener(`mousemove`, highlight);
			cell.forEach(function(elem,index,arr) {
				if (elem.classList.contains(`bordered`)) {
					elem.classList.remove(`bordered`);
				}
			});
			row.forEach(function(elem,index,arr) {
				if (index != 0 && index % 2 !=0)
				arr[index].classList.remove(`striped`);
			});
			function highlight(tabl) {
				if (click === 3) {
					tabl.target.classList.add(`highlight`);
				}
			};
		} else if (click === 4) {
			tabl.classList.remove(`bordered`);
			tabl.removeEventListener(`mousemove`, highlight);
			cell.forEach(function(elem,index,arr) {
				elem.classList.remove(`highlight`);
			});
		click = 0;
		}
	};
	tabl.addEventListener('click', styleTable);

	// ДЗ_Задача №3 - `Модифицируйте задачу 2. Добавьте три radiobutton. 
	// При выборе первой включайте класс bordered, 
	// при выборе второй — striped, 
	// при выборе третьей — highlight. 
	// При включении каждого класса выключайте остальные два.`
		let optionOne = document.createElement(`label`);
		optionOne.setAttribute(`for`, `one`);
		optionOne.textContent = `- Включить границы вокруг ячеек`;

		let inputOne = document.createElement(`input`);
		inputOne.setAttribute(`id`, `one`);
		inputOne.setAttribute(`type`, `radio`);
		inputOne.setAttribute(`name`, `inp`);

		let optionTwo = document.createElement(`label`);
		optionTwo.setAttribute(`for`, `two`);
		optionTwo.textContent = `- Включить БЧБ :)`;

		let inputTwo = document.createElement(`input`);
		inputTwo.setAttribute(`id`, `two`);
		inputTwo.setAttribute(`type`, `radio`);
		inputTwo.setAttribute(`name`, `inp`);

		let optionThree = document.createElement(`label`);
		optionThree.setAttribute(`for`, `three`);
		optionThree.textContent = `- Включить выделение ячейки при наведении курсора`;

		let inputThree = document.createElement(`input`);
		inputThree.setAttribute(`id`, `three`);
		inputThree.setAttribute(`type`, `radio`);
		inputThree.setAttribute(`name`, `inp`);

		document.body.appendChild(inputOne);
		document.body.appendChild(optionOne);

		document.body.appendChild(inputTwo);
		document.body.appendChild(optionTwo);

		document.body.appendChild(inputThree);
		document.body.appendChild(optionThree);

		inputOne.addEventListener(`click`, function styleTableOne() {
			styleTable(click = 0);
		});
		inputTwo.addEventListener(`click`, function styleTableTwo() {
			styleTable(click = 1);
		});
		inputThree.addEventListener(`click`, function styleTableThree() {
			styleTable(click = 2);
		});

	// ДЗ_Задача №4 - `Создайте пять элементов разных типов 
	// (например, div, p, button, a, span). Используя приём делегирования, 
	// по клику на элемент выводите информацию о его типе.`
		let divTwo = document.createElement(`div`);
		divTwo.setAttribute(`style`, 'width: 575px; height: 50px; background: #000; display: flex; margin-top: 10px');
		document.body.appendChild(divTwo);

		let span = document.createElement(`span`);
		span.setAttribute(`style`, 'line-height: 50px; color: #fff; margin-left: 10px');
		span.textContent = `Два способа начать с "чистого листа":`;
		divTwo.append(span);

		let p = document.createElement(`p`);
		p.setAttribute(`style`, 'height: 50px; width: 100px; background: red; margin: 0 50px');
		span.after(p);

		let a = document.createElement(`a`);
		a.textContent = `Способ №1`;
		a.setAttribute(`style`, 'line-height: 50px; width: 200px; margin: 0 10px');
		a.setAttribute(`href`, 'http://index.thml');
		a.setAttribute(`target`, '_blank');
		p.append(a);

		let btnDel = document.createElement(`button`);
		btnDel.textContent = `Способ №2`;
		divTwo.append(btnDel);
		btnDel.addEventListener(`click`, function(e) {
			let delAll = document.querySelector(`body`);
			delAll.remove();
		});

		divTwo.addEventListener(`mousedown`, function(e) {
			console.log(e.target.tagName);
		})

	// ДЗ_Задача №5 - `Добавьте в html код изображение. 
	// Добавьте скрипт, который будет выполнять следующие действия: 
	// при наведении мыши на картинку изображение заменяется другим, 
	// при выходе мыши за пределы изображения восстанавливается первоначальное изображение.`
		let img = document.createElement(`img`);
		img.src = 'IMG/close.ico';
		document.body.appendChild(img);
		img.addEventListener(`mouseover`, function(e) {
			img.src = `IMG/open.ico`;
		});
		img.addEventListener(`mouseout`, function(e) {
			img.src = `IMG/close.ico`;
		});
});



