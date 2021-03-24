/**
 * 某停车场，分3层，每层100车位	// Park(停车场类) Floor(层) Place(车位)
 * 每个车位都能检测车辆的驶入和离开，车辆进入前，显示每层的空余车位数量	 //Place empty(状态)：boolean in(car): 车进去 out() 车出来
 * 车辆进入前，显示每层空余车位数量	// Park作为整体来显示 详细需要Floor分别提供数量
 * 车辆进入时，识别车牌号和时间	    // Camera shot识别
 * 车辆出来时，出口显示器显示车牌号和停车时长 // Screen show
 */

// 车辆
class Car {
    constructor(num) {
        this.num = num;
    }
}

//摄像头
class Camera{
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

//屏幕
class Screen {
    show(car, inTime) {
        console.log("车牌号", car.num);
        console.log("停车时间", Date.now() - inTime);
    }
}


// 停车场 
class Park {
    constructor(floors) {
        this.floors = floors;
        this.camera = new Camera();
        this.screen = new Screen();
        this.carList = {};  //存储摄像头拍摄的信息；
    }
    in(car) {
        const info = this.camera.shot(car);
        const placePosition = parseInt(Math.random() * 100 % 100);
        const floorPosition = parseInt(Math.random() * 100 % 2);
        const place = this.floors[floorPosition].places[placePosition];
        place.in();
        info.place = place;
        this.carList[info.num] = info;
    }
    out(car) {
        const info = this.carList[car.num];
        const place = info.place;
        place.out();
        this.screen.show(car, info.inTime);
        delete this.carList[car.num];
    }
    emptyNum() {
        return this.floors.map(floor => `${floor.index}层还有${floor.emptyPlaceNum()}个空闲车位`).join('\n');
    }
}

// 层
class Floor {
    constructor(index, places) {
        this.index = index;
        this.places = places || [];
    }
    emptyPlaceNum() {
        return this.places.filter(v => v.empty === true).length;
    }
}

//车位
class Place {
    constructor() {
        this.empty = true;
    }
    in() {
        this.empty = false;
    }
    out() {
        this.empty = true;
    }
}

// 测试
const floors = [];
for(let i =0; i<3;i++) {
    const places = [];
    for(let j = 0; j<100;j++) {
        places[j] = new Place();
    }
    floors[i] = new Floor(i+1, places);
}
const park = new Park(floors);
const car1 = new Car(100);
const car2 = new Car(200);
park.in(car1);
console.log(park.emptyNum());
setTimeout(() => {
    park.out(car1);
},2000)
park.in(car2);