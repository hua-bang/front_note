class RealImage{
    constructor(fileName) {
        this.fileName = fileName
    }

    display() {
        console.log(`this file name is ${this.fileName}`);
    }
} 

class ProxyImage{
    constructor(fileName) {
        this.realImage = new RealImage(fileName);
    }

    display() {
        this.realImage.display();
    }
}


let proxyImage = new ProxyImage("xx.jpg");
proxyImage.display();

export default ProxyImage;