// Почему - то "желания" не добавляются в вишлист! Почините приложение, дописав одну строку.Укажите эту строку в качестве ответа

document.body.innerHTML = `
  <form id="add-wish-form">
    <input type="text" id="wish-item" placeholder="Желание">
    <button type="submit">Добавить желание</button>
  </form>
  <ul id="wishes-list"></ul>
`
const model = {
	wishes: [],
	addWish(item) {
		this.wishes.push(item)
	},
}
const view = {
	init() {
		const form = document.getElementById('add-wish-form')
		form.addEventListener('submit', function (event) {
			event.preventDefault()
			const wishInputElement = document.getElementById('wish-item')
			const wishText = wishInputElement.value.trim()
			if (wishText) {
				controller.addWish(wishText)
				wishInputElement.value = ''
			}
		})
		this.render(model.wishes)
	},
	render(wishes) {
		const wishesList = document.getElementById('wishes-list')
		let wishesHTML = ''
		wishes.forEach((wish, index) => {
			wishesHTML += `<li>${wish}</li>`
		})
		wishesList.innerHTML = wishesHTML
	},
}
const controller = {
	addWish(item) {
		model.addWish(item)

	},
}
document.addEventListener('DOMContentLoaded', () => view.init())