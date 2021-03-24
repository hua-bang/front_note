/**
 * 打车，可以打专车和快车。任何车都有车牌号和名称
 * 不同车价格不同 快车每公里1元 专车每公里2元
 * 行程开始时，显示车辆信息
 * 行程结束后，显示打车金额
 */

class Car {
    constructor(number, name) {
        this.price = 1;
        this.number = number;
        this.name = name;
    }

    getPrice(distance) {
        return this.price * distance;
    }
}

class FastCar extends Car{
    constructor() {
        super();
        this.price = 1;
    }
}

class SpecialCar extends Car{
    constructor() {
        super();
        this.price = 2;
    }
}

export {
    Car,
    FastCar,
    SpecialCar
}