// function Car(make, model){
//     this.make = make;
//     this.model = model;
// }

// Car.prototype.updateModel = function(newModel){
//     this.model = newModel;
// }

// let myCar = new Car("chevy", "silverado")

// console.log(myCar);

class Car {
    // if you want to use the word this inside of a class,
    // you must call the constructor function
    // in ppython it's =  __init() 
    // in JS:
    constructor(make, model, mpg, tankSize){
        this.make = make;
        this.model = model;
        this.mpg = mpg;
        this.tankSize = tankSize;
    }
    // instead of prototype we can just put the method in the class
    updateModel(newModel){
        this.model = newModel;
    }

    distanceToEmpty(){
        console.log(this.mpg * this.tankSize + " miles left")
    }

    turnOn(){
        console.log("car is on")
    }
}

let gregsCar = new Car("Toyota", "Camry", 36, 15);
// // console.log(gregsCar);
// gregsCar.distanceToEmpty();


// seemingly creates inheritance with all of the same methods as car
// super takes the same information from the parents and gives the next class access to all of the same information
class ElectricCar extends Car {
    constructor(make,model,batteryLife){
        super(make,model,null,null);
        this.batteryLife = batteryLife;
    }
    // over riding the previous
    distanceToEmpty(){
        console.log(this.batteryLife * 10 + " miles left")
    }
}

let davidCummingsCar = new ElectricCar("Tesla", "X", 100)

davidCummingsCar.distanceToEmpty();
davidCummingsCar.turnOn();
