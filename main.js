'use strict'

class First {
    constructor() {

    }
    hello() {
        console.log(`Привет, я метод родителя`);
    }

}
class Second extends First {
    constructor() {
        super()
    }
    newHello() {
        super.hello()
        console.log(`А я метод дочерний`);

    }
}

const obj = new Second
obj.newHello()









