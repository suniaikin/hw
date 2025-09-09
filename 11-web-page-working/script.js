// // console.log(window.document.body.children[0].classList)
// // console.log(window.document.body.children[2])
// // console.log(window.document.body.children[1].children[0].textContent)
// const listItem = document.createElement('li')
// listItem.classList.add('item')
// listItem.textContent = 'Item 4'
// const list = document.querySelector('.list')
// list.prepend(listItem)



//Create new element
const newElement = document.createElement('div')

//Add an element to the page
document.body.append(newElement)

//Add text
newElement.textContent = 'New Element Text'

//Change text
newElement.textContent = 'Super New Element Text'

newElement.innerHTML = 'Absolutely New Element Text'

const listItemText = 'InnerHTML'

// list.innerHTML = list.innerHTML + `<li class="item">${listItemText}</li>`
// console.log(list.innerHTML)

newElement.style.backgroundColor = 'red'


//Search for an element on the page
const titleElement = document.getElementById('id-элемента')

//Search for an element on the page by class
const header = document.getElementsByTagName("h1")

//Search by selector (gets the first only)
const listItem = document.querySelector('.list .current')

//Search for all elements on the page
const listItems = document.querySelectorAll('ol .item') //all elements


