let userChoice
let computerChoice
let isWinner = false

while (!isWinner) {
	userChoice = prompt('Выбери камень, ножницы или бумага:')
	userChoice = userChoice.toLowerCase()

	let randomNumber = Math.floor(Math.random() * 3)

	if (randomNumber === 0) {
		computerChoice = 'камень'
	} else if (randomNumber === 1) {
		computerChoice = 'ножницы'
	} else {
		computerChoice = 'бумага'
	}

	if (userChoice === computerChoice) {
		alert('Ничья! Ты выбрал ' + userChoice + ', компьютер выбрал ' + computerChoice)
	} else if (
		(userChoice === 'камень' && computerChoice === 'ножницы') ||
		(userChoice === 'ножницы' && computerChoice === 'бумага') ||
		(userChoice === 'бумага' && computerChoice === 'камень')
	) {
		alert('Ты выиграл! Ты выбрал ' + userChoice + ', компьютер выбрал ' + computerChoice)
		isWinner = true
	} else {
		alert('Ты проиграл! Ты выбрал ' + userChoice + ', компьютер выбрал ' + computerChoice)
	}



}