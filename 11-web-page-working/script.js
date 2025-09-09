// // console.log(window.document.body.children[0].classList)
// // console.log(window.document.body.children[2])
// // console.log(window.document.body.children[1].children[0].textContent)
// const listItem = document.createElement('li')
// listItem.classList.add('item')
// listItem.textContent = 'Item 4'
// const list = document.querySelector('.list')
// list.prepend(listItem)

//Create new element
const neElement = document.createElement('div')

//Add an element to the page
document.body.append(neElement)

//Search for an element on the page
const titleElement = document.getElementById('id-элемента')

//Search for an element on the page by class
const header = document.getElementsByTagName("h1")

//Search for an element on the page
const listItem = document.querySelector('.list .current') //first element

//Search for all elements on the page
const listItems = document.querySelectorAll('ol .item') //all elements
console.log(listItems) //NodeList


