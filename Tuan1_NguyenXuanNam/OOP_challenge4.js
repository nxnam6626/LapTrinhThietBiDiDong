
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} đang đi với tốc độ ${this.speed} km/h`);
      return this;
    }
  
 
    brake() {
      this.speed -= 5;
      console.log(`${this.make} đang đi với tốc độ ${this.speed} km/h`);
      return this;
    }
  }
  

  class EVCl extends CarCl {
    #charge;
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`Pin đã được sạc đến ${this.#charge}%`);
      return this;
    }
  

    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(`${this.make} đang đi với tốc độ ${this.speed} km/h, với pin còn ${this.#charge}%`);
      return this;
    }
  }
  

  const rivian = new EVCl('Rivian', 120, 23);
  
  rivian
    .accelerate() 
    .brake()      
    .chargeBattery(90)
    .accelerate()
    .brake();         
  