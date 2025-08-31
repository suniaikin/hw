// Function Declaration
function sumNumbers(a, b) {
	return a + b
}

// Function Expression
const fakeName = function (a, b) {
	return a + b
}

console.log(sumNumbers(2, 2))
console.log(fakeName(2, 2))

// Arrow function
//Задаются только через Function Expression
// let variable = () => {}

const arrowFunc = (a, b) => a + b

console.log(arrowFunc(2, 5))