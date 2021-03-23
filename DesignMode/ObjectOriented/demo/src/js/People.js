class People {
    constructor(name, house) {
        this.name = name;
        this.house = house;
    }
}

class A extends People {
    constructor(name, house) {
        super(name, house);
    }
}

class B extends People {
    constructor(name, house) {
        super(name, house);
    }
}

class House {
    constructor(city) {
        this.city = city;
    }
}