let energy = 10

while (energy >= 0) {
	console.log(`Текущий уровень энергии: ${energy}`)
	if (energy === 0) {
		console.log("Робот грустит... 😢 Нужно подзарядить!")
		break
	} else if (energy <= 3) {
		console.log("Робот начинает чувствовать усталость... 🥱")
	} else {
		console.log("Робот счастлив и бодрствует! 😊")
	}
	energy--
	console.log("Программа завершена. Робот отдыхает.")
	console.log("-----------------------------")
	console.log("Пауза перед следующим циклом...")


}