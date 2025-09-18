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