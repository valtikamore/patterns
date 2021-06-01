

class Bwm {
    constructor(model,price,masSpeed) {
        this.model = model
        this.price = price
        this.masSpeed = masSpeed
    }
}
class Bmwfactory {
    create(type) {
        if(type === 'x5') {
            return new Bwm(type,10500,300)
        }
        if(type === 'x6') {
            return new Bwm(type,105001,310)
        }
    }
}
const factory = new Bmwfactory()

const x5 = factory.create('x5')
const x6 = factory.create('x6')

