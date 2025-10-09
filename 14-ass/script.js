document.body.innerHTML = `
  <button id="addPetButton">Добавь питомца!</button>
  <div id="petContainer"></div>
`;
const pets = ["🐶", "🐱", "🐹", "🐰", "🦜", "🐢", "🐟", "🐸", "🦇", "🕷", "🦔", "🐺"]
const petContainer = document.getElementById("petContainer")
document.getElementById("addPetButton").addEventListener('click', () => {
	const pet = XXX
	pet.textContent = pets[Math.floor(Math.random() * pets.length)]
	pet.style.fontSize = '2rem'
	pet.style.margin = '5px'
	petContainer.append(pet)
})





document.body.innerHTML = `
  <form>
    <input type="text" id="task-input" placeholder="Введите задачу">
    <button type="submit">Добавить задачу!</button>
  </form>
  <ul id="task-container"></ul>
`
const form = document.querySelector('form')
const taskContainer = document.getElementById('task-container')
const input = document.getElementById('task-input')
form.addEventListener('submit', (e) => {
	e.preventDefault()
	const taskText = input.value.trim()
	if (taskText) {
		const task = document.createElement('li')
		task.textContent = taskText
		taskContainer.append(task)
		input.value = ''
		input.focus()
	} else {
		alert('Пожалуйста, введите текст задачи!')
	}
})






document.body.innerHTML = `
  <button id="start-button">Показать сообщение через 3 секунды</button>
  <button id="cancel-button">Отменить показ сообщения</button>
  <div id="message-output"></div>
`

const startButton = document.getElementById('start-button')
const cancelButton = document.getElementById('cancel-button')
const messageOutput = document.getElementById('message-output')

let timerId

startButton.addEventListener('click', () => {
	messageOutput.textContent =
		'Сообщение появится через 3 секунды...'
	timerId = setTimeout(() => {
		messageOutput.textContent = 'Вот и сообщение!'
	}, 3000)
})

cancelButton.addEventListener('click', () => {
	XXX
	messageOutput.textContent =
		'Показ сообщения отменён.'
})





document.body.innerHTML = `
  <form>
    <label>
      City:
      <input type="text" name="city" />
    </label>
      <button>Submit</button>
  </form>
`
const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
	event.preventDefault()
	const City = event.target.city.value
	console.log(city)
})





document.body.innerHTML = `
  <div class="container">
    <button>HTML</button>
    <button>CSS</button>
    <button>JS</button>
    <button>React</button>
  </div>
`

const container = document.querySelector('.container')
const buttons = document.querySelectorAll('button')
const button = document.querySelector('button')

XXX.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		console.log(event.target.textContent)
	}
})


