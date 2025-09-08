// console.log(window.document.body.children[0].classList)
// console.log(window.document.body.children[2])
// console.log(window.document.body.children[1].children[0].textContent)

const listItem = document.createElement('li')
listItem.classList.add('item')
listItem.textContent = 'Item 4'
document.querySelector('ul').append(listItem)

