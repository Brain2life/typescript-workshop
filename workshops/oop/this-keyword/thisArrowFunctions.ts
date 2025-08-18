class Car {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  // A method on the Car class
  accelerate() {
    console.log(`The car is accelerating to ${this.speed} mph.`);
  }

  // A method using a callback
  startEngine() {
    // The "this" inside this setTimeout callback is not the Car instance
    setTimeout(function() {
      // "this" here is the global object (or undefined in strict mode)
      // The following line will throw an error
    //   console.log(this.speed); 
    }, 1000);
  }
}

const myCar = new Car(60);
myCar.startEngine(); // This will not work as expected

class Car2 {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  // A method on the Car class
  accelerate() {
    console.log(`The car is accelerating to ${this.speed} mph.`);
  }

  // A method using an arrow function callback
  startEngine() {
    // The arrow function preserves the "this" context from the startEngine method
    setTimeout(() => {
      console.log(`Engine started. Current speed is ${this.speed} mph.`);
      this.accelerate(); // "this" correctly refers to the Car instance
    }, 1000);
  }
}

const myCar2 = new Car2(60);
myCar2.startEngine(); // This now works as expected