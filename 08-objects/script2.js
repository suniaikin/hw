// Объекты с "поведением"
const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50, // голод
    sayHi: function () {
        console.log("Meow!!!")
    },
    checkStatus: function () {
        console.log(`Счастье: ${pet.happiness}, голод: ${pet.hunger}`)
    },
      feedPet: function (foodQuantity) {
        pet.hunger = pet.hunger - foodQuantity
        if (pet.hunger < 0) {
            pet.hunger = 0
        }
        console.log('Питомец покормлен!')
    },
    playWithPet: function () {
        pet.happiness = pet.happiness + 10
        if (pet.happiness > 100) {
            pet.happiness = 100
        }
        console.log('Питомец стал счастливее!')
    }
}
