const listItems = document.querySelectorAll('li'); // listItems - это NodeList

// Перебор элементов с помощью forEach
listItems.forEach(item => {
    console.log(item.textContent);
});

// Вывод в консоль:
// "Пункт 1"
// "Пункт 2"
// "Пункт 3"

console.log(listItems.length); // Выведет: 3