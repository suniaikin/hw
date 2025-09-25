// Создание элемента
const newElement = document.createElement("div");

// Добавление элемента на страницу
document.body.prepend(newElement);

// Поиск элемента
// по id
const header = document.getElementById("course-title");

// по тегу (возвращает коллекцию)
const listIteams = document.getElementsByTagName("li");

// по классу
const listIteamsByClass = document.getElementsByClassName("course-list-item");

// по CSS-селектору (возвращает первый найденный элемент)
const headerBySelector = document.querySelector(".list .current");
