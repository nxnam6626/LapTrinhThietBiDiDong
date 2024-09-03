class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }


    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}


const ford = new CarCl('Ford', 120);


ford.accelerate();
ford.brake();

console.log(`Current speed in mi/h: ${ford.speedUS}`);
ford.speedUS = 50;
console.log(`Current speed in km/h: ${ford.speed}`);  
