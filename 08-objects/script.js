const car = { // // = {...} // = new Object() => {}; = new Array() => []
    brend: "mazda",
    model: "6",
    "year": 2015,
    millage: 235000,
    color: "red",
    engine: {
        type: 'petrol',
        "volume": 2.0,
        power: 150,
        fuelGrade: 95,
    },
    price: 15000,
    transmission: 'automatic',
    isTaxi: false,
    prev_owners: ["Daniel", "Natalia", "Elena"],
}


// чтение свойства объекта
console.log(car.brend);
console.log(car["brend"]);
console.log(car.engine.type);
console.log(car.engine);
console.log(car.prev_owners);
console.log(car.prev_owners[0]);


// создание нового свойства (инициализация свойства значением)
car.lastPrice = 14500

// изменение значения свойства (переприсваивание)
car.millage = 250000

// удаление свойства из объекта
delete car.isTaxi


// все ключи объекта
const keys = Object.keys(car)
console.log(keys);

// все значения объекта
const engine = Object.values(car.engine)
console.log(engine);


//обход объекта
for (const key in car) {
    console.log(car[key]);
}

//все "вхождения"
const entries = Object.entries(car.engine)
console.log(entries);
