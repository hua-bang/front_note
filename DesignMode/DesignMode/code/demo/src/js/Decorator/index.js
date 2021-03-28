class Circle {
    draw() {
        console.log("draw");
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }

    draw() {
        this.circle.draw();
        this.setTedBorder(this.circle);
    }

    setTedBorder(circle) {
        console.log("设置红色边框")
    }
}

let circle = new Circle();
circle.draw();
let decorator = new Decorator(circle);
decorator.draw();

export {
    Decorator
};