// Задача №1
let cylinder = {
	radius: 3,
	hight: 5,
	volume(vol) {
		vol = Math.PI * this.radius * this.radius * this.hight;
		return vol;
	}
}
console.log(`Задача №1:`);
console.log(`	Объём цилиндра с радиусом = "${cylinder.radius} мм" и высотой = "${cylinder.hight} мм" равен => "${cylinder.volume().toFixed(1)} мм³"`);


// Задача №2
let penguin = {
	name: "Шкипер",
	created: ["Марк Бертон", " Билли Фролик", " Эрик Дарнелл", " Том МакГрат"],
	origin: "Мадагаскар"
};
console.log(`Задача №2:`);
penguin.canFly = false;
penguin.sayHello = function() {
	console.log(`	Привет, я ${this.name} 
	- первый раз на экране я появился в мультфильме "${this.origin}";
	- мои создатели вот эти ребята: ${this.created}.`);
};
penguin.fly = function() {
	if (this.canFly === false) {
		console.log(`	И к сожалению, я не умею летать :(`);
	} else {
		console.log(`	Но, в следующих частях мультфильма я полечу на самолёте :)`);
	}
}
penguin.sayHello();
penguin.fly();


// Задача №3
console.log(`Задача №3:`);
let dawnOfWar = {
	name: "Warhammer 40000: Dawn of War",
	year: 2004,
	genre: "Strategy",
	creater: "Relic Entertainment",
	editor: "THQ",
	race: ["Космодесант"," Эльдары"," Орки"," Хаос",],
	info() {
		console.log(`	В оригинальной игре "${this.name}" присутствуют следующие расы:
	- "${this.race}"`);
	}
}
let winterAssault = {
	name: "Warhammer 40000: Dawn of War – Winter Assault",
	year: 2005,
	genre: "Strategy",
	creater: "Relic Entertainment",
	editor: "THQ",
	race: ["Космодесант"," Эльдары"," Орки"," Хаос"," Имперская гвардия"],
	info() {
		console.log(`	В самостоятельном дополнении к оригинальной игре "${this.name}" присутствуют следующие расы:
	- "${this.race}"`);
	}
}
let darkCrusade = {
	name: "Warhammer 40000: Dawn of War – Dark Crusade",
	year: 2006,
	genre: "Strategy",
	creater: "Relic Entertainment",
	editor: "THQ",
	race: ["Космодесант"," Эльдары"," Орки"," Хаос"," Имперская гвардия"," Некроны"," Тау"],
	info() {
		console.log(`	В самостоятельном дополнении к оригинальной игре "${this.name}" присутствуют следующие расы:
	- "${this.race}"`);
	}
}
let soulstorm = {
	name: "Warhammer 40000: Dawn of War – Soulstorm",
	year: 2008,
	genre: "Strategy",
	creater: "Relic Entertainment",
	editor: "THQ",
	race: ["Космодесант"," Эльдары"," Орки"," Хаос"," Имперская гвардия"," Некроны"," Тау"," Тёмные Эльдары", " Сёстры Битвы"],
	info() {
		console.log(`	В самостоятельном дополнении к оригинальной игре "${this.name}" присутствуют следующие расы:
	- "${this.race}"`);
	}
}
dawnOfWar.info();
winterAssault.info();
darkCrusade.info();
soulstorm.info();


// Задача №4
console.log(`Задача №4:`);
function select(x, y) {
	if (x["year"] < y["year"]) {
		return x["name"];
	} else {
		return y["name"];
		}      
}
console.log(`	Игра "${select(dawnOfWar, soulstorm)}" появилась раньше`);