let userChoice
let computerChoice
let isWinner = false

while (!isWinner) {
	userChoice = prompt('Выбери камень, ножницы или бумага:')


	let randomNum = Math.floor(Math.random() * 3);

	switch (randomNum) {
		case 0:
			computerChoice = 'камень'
			break
		case 1:
			computerChoice = 'ножницы'
			break
		case 2:
			computerChoice = 'бумага'
			break
	}
}