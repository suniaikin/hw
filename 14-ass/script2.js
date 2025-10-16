document.body.innerHTML = `
  <button id="toggle-theme">Переключить на ночной режим</button>
  <div id="theme-status">Текущий режим: Дневной</div>
`

const model = {
	isDay: true,
	toggleTheme() {
		this.isDay = !this.isDay
		view.render(this.isDay)
	},
}

const view = {
	init() {
		const toggleButton = document.getElementById('toggle-theme')
		toggleButton.addEventListener('click', () => {

		})
		this.render(model.isDay)
	},

	render(isDay) {
		const themeStatus = isDay ? 'Дневной' : 'Ночной'
		document.getElementById('theme-status').textContent = `Текущий режим: ${themeStatus}`
		document.getElementById('toggle-theme').textContent = isDay
			? 'Переключить на ночной режим'
			: 'Переключить на дневной режим'
		document.body.style.backgroundColor = isDay ? 'blue' : 'red'
		document.body.style.color = isDay ? 'red' : 'blue'
	},
}

const controller = {
	toggleTheme() {
		model.toggleTheme()
	},
}

document.addEventListener('DOMContentLoaded', () => view.init())