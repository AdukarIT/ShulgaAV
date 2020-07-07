// Задача №1
let cylinder = {
	radius: 3,
	hight: 5,
	volume(vol) {
		vol = Math.PI * this.radius * this.radius * this.hight;
		return vol;
	}
}
console.log(`Задача №1:`)
console.log(`	Объём цилиндра с радиусом = "${cylinder.radius} мм" и высотой = "${cylinder.hight} мм" равен => "${cylinder.volume().toFixed(1)} мм³"`);