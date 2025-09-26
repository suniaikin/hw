// Создание элемента
const newElement = document.createElement("div");

// Добавление элемента на страницу
document.body.prepend(newElement);

// Поиск элемента
// по id
const header = document.getElementById("course-title");

// по тегу (возвращает коллекцию, ДИНАМИЧЕСКИЙ)
const listIteams = document.getElementsByTagName("li");

// по классу
const listIteamsByClass = document.getElementsByClassName("course-list-item");

// по CSS-селектору (возвращает первый найденный элемент)
const headerBySelector = document.querySelector(".list .current");

// по CSS-селектору (возвращает коллекцию, НЕ ДИНАМИЧЕСКИЙ)
const listIteamsBySelectorAll = document.querySelectorAll(".course-list-item");

// Изменение содержимого
header.textContent = "New Course Title"; // только текст
header.innerHTML = "<span>New Course Title</span>"; // HTML, учитывает стили


// HTML инъекция
header.innerHTML = `<span style="color: red">New Course Title</span>`; // HTML, учитывает стили


// Изменение стилей
header.style.color = "blue";
header.style.fontSize = "54px";
header.style.fontWeight = "900";
header.style.textAlign = "center";

// Добавление/удаление классов
header.classList.add("new-class", "another-class");
header.classList.remove("another-class");
header.classList.toggle("toggle-class"); // если есть - удалит, если нет - добавит

// Управление атрибутами
header.setAttribute("data-id", "123");
const dataId = header.getAttribute("data-id");
header.removeAttribute("data-id");

const img = document.querySelector("img");
img.setAttribute("src", "https://i.pinimg.com/736x/0b/4c/49/0b4c49720dd3041a24fa618d6faabb1c.jpg");
img.setAttribute("alt", "Placeholder Image");

// // Удаление элемента
// img.remove();

// Кнопка для демонстрации
const button = document.getElementById("color-button")
button.addEventListener("click", () => {
	const listIteam = document.createElement("li");
	listIteam.classList.add("item");
	listIteam.textContent = "New Course Item";
	const list = document.querySelector(".list");
	list.append(listIteam);
});

img.addEventListener("dbclick", () => {
	img.remove();
});

