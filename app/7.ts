function enumerable(value: boolean) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
        descriptor.enumerable = value;
    }
}

class C {
    @enumerable(false)
    method() { console.log('c got called'); }
}

var ac = new C();
ac.method();


function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {

    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var xGreeter = new Greeter('Pratik');

for (var key in xGreeter) {
    if (xGreeter.hasOwnProperty(key)) {
        console.log(key);
    }
}