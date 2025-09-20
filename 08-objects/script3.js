const begemot = {
    name: 'begemot',
    happiness: 0,
    hunger: 0,

    sayHi: function () {
        console.log('Примус починяю')
    },
    checkStatus: function () {
        console.log(`Счастье: ${begemot.happiness}, голод: ${begemot.hunger}`)
    },
    feedBegemot: function (foodQuantity) {
        begemot.hunger = begemot.hunger - foodQuantity
        if (begemot.hunger < 0) {
            begemot.hunger = 0
        }
        console.log('Питомец покормлен!')
    },
    playWithBegemot: function () {
        begemot.happiness = begemot.happiness + 10
        if (begemot.happiness > 100) {
            begemot.happiness = 100
        }
        console.log('Питомец стал счастливее!')
    }
}

class Pet {
    constructor(name, happiness, hunger, voice) {
        this.name = name;
        this.happiness = happiness;
        this.hunger = hunger;
        this.voice = voice;
    };

    sayHi () {
        console.log(`${this.voice}`)
    };
    checkStatus () {
        console.log(`Счастье: ${this.happiness}, голод: ${this.hunger}`)
    };
    feed (foodQuantity) {
        this.hunger = this.hunger - foodQuantity
        if (this.hunger < 0) {
            this.hunger = 0
        }
        console.log('Питомец покормлен!')
    };
    playWith () {
        this.happiness = this.happiness + 10
        if (this.happiness > 100) {
            this.happiness = 100
        }
        console.log('Питомец стал счастливее!')
    }

}

const sonja = new Pet ('Sonja', 50, 50, 'Gav!' )
const begemot2 = new Pet ('Begemot2', 50, 50, 'Meo' )

sonja.checkStatus()
sonja.playWith()

begemot2.checkStatus()