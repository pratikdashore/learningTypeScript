interface IVehicle {
    model: string;
    year: number;
    brand: string;
    run: (speed: number) => void;
    details: () => IVehicle;
}

class Vehicle implements IVehicle {
    constructor(public model: string, public brand: string, public year: number) {

    }


    run(speed: number): void {
        console.log('Vehicle is running on ' + speed + ' KMPH');
    }

    details = (): IVehicle => {
        return this;
    }
}


export class Bike extends Vehicle {
    startStatus = false;
    constructor(model: string, brand: string, year: number) {
        super(model, brand, year);
    }

    run(speed: number): void {
        if (this.startStatus) {
            super.run(speed);
        } else {
            throw 'Bike has not started yet';
        }
    }

    changeGear(gear: number) {
        if (this.startStatus) {
            console.log('Gear has shifted to ' + gear);
        } else {
            throw 'Bike has not started yet';
        }
    }

    start(afterStart: (gear: number) => void) {
        var that = this;
        setTimeout(() => {
            that.startStatus = true;
            afterStart.call(that, 1);
            that.run(10);
        }, 5000);
    }
}