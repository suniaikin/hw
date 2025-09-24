document.body.innerHTML = `
  <div>
    <button id="rain-button">Add rain 💧</button>
  </div>
`

const rainButton = document.getElementById('rain-button');

rainButton.addEventListener('click', () => {
	console.log('Rain added! ☔️')
})