import Person from "./Person";

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(`${this.name} - study`)
    }
}

export default Student;