// Задача №1 - 'Дан элемент #elem. Добавьте ему класс "www".'
let elem = document.getElementById(`elem`);
elem.classList.add(`www`);
console.log(elem);

// Задача №2 - 'Дан элемент #elem. Проверьте наличие у него класса "www", 
// если есть — удалите этот класс.'
if (elem.classList.contains(`www`)) {
	elem.classList.remove(`www`)};
console.log(elem);

// Задача №3 - 'Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, 
// чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.'
let ul = document.querySelector(`ul`);
let arr = [`Пятый`, `Шестой`, `Седьмой`, `Восьмой`];
for (i = 0; i < arr.length; i++) {
	let li = document.createElement(`li`);
	li.innerHTML = arr[i];
	ul.appendChild(li);
}
let coll = ul.children;
for (i = 0; i < coll.length; i++) {
	if (i != 0 && i % 2 != 0) {
		coll[i].setAttribute(`style`, `background-color: red; width: 75px`);
	}
}
console.log(coll);

// Задача №4 - 'Дан элемент #elem. Найдите его соседа сверху и добавьте ему в начало 
// и в конец по восклицательному знаку '!''
let sibl = elem.previousElementSibling;
sibl.before(`!`);
sibl.after(`!`);
console.log(`${sibl.previousSibling.data}${sibl.textContent}${sibl.nextSibling.data}`);

// Задача №5 - 'Реализуйте функцию wrapInParagraph, которая находит каждый 
// из дочерних текстовых узлов внутри элемента div и оборачивает их в элемент p.'
let div = document.querySelector(`div`).childNodes;
console.log(div);
function wrapInParagraph(div) {
	for (i = 0; i < div.length; i++) {
		if (div[i].nodeName === `#text`) {
			let p = document.createElement(`p`);
			// let x = div[i].nodeName; - вариант №2 длиннее
			// p.textContent = x; - вариант №2 длиннее
			p.innerHTML = div[i].textContent; //- вариант №1 короче
			div[i].replaceWith(p);
		}
	}
	return div;
}
console.log(wrapInParagraph(div));

// Задача №6 - 'Реализуйте функцию normalizeClassNames, 
// которая нормализует имена классов для всех элементов на странице: все классы, 
// которые содержат дефис (например, menu-main) должны быть заменены 
// на классы в camelCase (menuMain).'
let allClassesElem = document.querySelectorAll('[class]');
console.log(allClassesElem);
function normalizeClassNames(allClassesElem) {
	for (i = 0; i < allClassesElem.length; i++) {
		let word = allClassesElem[i].className;
		for (j = 0; j < word.length; j++) {
			if (word[j] === `-`) {
				word = word.slice(0, j) + word[j + 1].toUpperCase() + word.slice(j + 2);
				allClassesElem[i].className = word;
			}
		}
	}
return allClassesElem
}
console.log(normalizeClassNames(allClassesElem));