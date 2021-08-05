interface Alarm {
  alert(): void;
}

interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Door { }

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor alert");
  }
}

class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
  lightOn() {
    console.log("Car light on");
  }
  lightOff() {
    console.log("Car light off");
  }
}

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
interface Point3d extends Point {
  z: number;
  getZ(): void;
}

class SpecialPoint implements Point3d {
  z: number
  y: number
  x: number
  getZ() {
    console.log("get z");
  }
}
