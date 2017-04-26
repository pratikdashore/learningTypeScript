interface IVehicle {
    colour: string;
    model: string;
    brand?: string;
    run: (speed: number) => void;
    details: () => IVehicle;
}

class Vehicle implements IVehicle {
    constructor(public colour: string, public model: string) { }

    run = (speed: number): void => {
        console.log('Vehicle runs with ' + speed + 'km/h');
    }

    details = (): Vehicle => {
        return this;
    }

}

class Car extends Vehicle {
    startStatus = false;

    constructor(public type: string, colour: string, model: string) {
        super(colour, model);
    }

    run = (speed: number): void => {
        if (this.startStatus) {
            console.log('running on ' + speed + ' km/h');
        } else {
            throw "Car hasn't started;";
        }

    }

    start(callBack: (startStatus: boolean, gear: number) => void): void {
        setTimeout(() => {
            callBack(true, 1);
        }, 1000);
    }
}

var car = new Car('Sedan', 'Black', 'Honda City');
var callee = (startStatus: boolean, gear: number): void => {
    car.startStatus = startStatus;
    console.log('Car started in ' + gear + ' gear');
}

try {
    car.run(100);
} catch (error) {
    console.log(error);
    car.start(callee);
}

var abc = <Vehicle>car;