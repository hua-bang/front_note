class Car {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

class FastCar extends Car{
    constructor(name, number) {
        super(name, number);
        this.price = 1;
    }
}

class SpeicalCar extends Car{
    constructor(name, number) {
        super(name, number);
        this.price = 2;
    }
}

class Trip {

    constructor(car) {
        this.car = car;
    }

    start() {
        console.log(`行程开始，名称：${this.car.name}, 车牌号: ${this.car.number}`);
    }

    end() {
        console.log(`形成结束,价格: ${this.car.price * 5}`);
    }
}

let car = new SpeicalCar("森塔", 500);
let trip = new Trip(car);
trip.start();
setTimeout(() => {
    trip.end();
},2000)