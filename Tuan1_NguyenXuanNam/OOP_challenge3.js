
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} đang đi với tốc độ ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} đang đi với tốc độ ${this.speed} km/h`);
};


function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`Pin đã được sạc đến ${this.charge}%`);
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} đang đi với tốc độ ${this.speed} km/h, với pin còn ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);


tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
