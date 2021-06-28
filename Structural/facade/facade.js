class Conveyor {
    setBody(){console.log('Body set!')}
    getEngine(){console.log('getEngine!')}

}

class Conveyourfacade {
    constructor(car) {
        this.car = car
    }
    assembleCar() {
        this.car.setBody()
        this.car.getEngine()
    }
}
const conveyour = new Conveyourfacade(new Conveyor())
const car = conveyour.assembleCar()
console.log(car)
