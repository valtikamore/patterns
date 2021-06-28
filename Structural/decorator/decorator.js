class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car'
    }
    getPrice () {
        return this.price
    }
    getDescription () {
        return this.model
    }
}

class Tesla extends Car () {
    constructor() {
        super()
        this.price = 25000
        this.model = 'Tesla'
    }
}

class Autopilot {
    constructor(car) {
        this.car = car
    }
    getPrice () {
        return this.car.getPrice() + 5000
    }
    getDescription() {
        return `${this.car.getDescription()} with autopilot`
    }
}
class Parktronik {
    constructor(car) {
        this.car = car
    }
    getPrice () {
        return this.getPrice() + 30000
    }
    getDescription () {
        return `${this.car.getDescription()} with Parktronik`
    }
}
let tesla = new Tesla()
tesla = new Autopilot(tesla)
tesla = new Parktronik(tesla)
console.log(tesla.getPrice() , tesla.getDescription())

let tesla2 = new Tesla()
tesla2 = new Autopilot(tesla2)
console.log(tesla2.getDescription(), tesla2.getPrice())

class Audi extends Car {
    constructor() {
        super();
        this.price = 2000
        this.model = 'Audi'
    }
}
let audi = new Audi()
audi = new Autopilot(audi)
console.log(audi.getPrice(), audi.getDescription())
