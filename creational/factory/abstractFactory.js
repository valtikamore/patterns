function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory
}

function sportCatFactory () {
    return new z4()
}

function familyCatFactory () {
    return new i3()
}
class Z4 {
    info() {
        return 'z4 is a sport'
    }
}
class i3 {
    info() {
        return 'i3 is a family'
    }
}

const producer = bmwProducer('sport')

const myCar = new producer()
console.log(myCar.info())