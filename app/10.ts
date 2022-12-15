// decorators are praposed in js and not yet accepted
// used for declarative programming
// we will use this on class as @classDecorator

// decorators are mostly used to manipulate meta data so we can have guess what kind of parameters will be passed based on type of decorator
//Decorators are accepted as functions, which can be decorated at class, fields(methods and properties), parameters

//type ClassDecorator = <TFunction extends Function>(target: TFunction) => void | TFunction
// if class decorator function returns another function that will replace the original constructor function
// in class decorator the target is constructor function.

var classDecorator: ClassDecorator = function(target: Function) {
  ////
  console.log("Class Decorator");
  console.log(target);
};

//type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void | TypedPropertyDescriptor<T>
// method decorators have three paramentes
// Object : Object which have that method
// String: name of method
// PropertyDescriptor
// return value will replace origincal property desciptor
var methodDecorator: MethodDecorator = function(
  target: Food,
  propertyKey: string,
  desc: PropertyDescriptor
) {
  console.log("method decorator");
  console.log(target.name);
  console.log(desc);
};

// Property decorators
//type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void
var propDecorator: PropertyDecorator = function(target: Food, propKey: string) {
  console.log(propKey);
  console.log(target);
};

@classDecorator
class Food {
  @propDecorator
  available: boolean;
  constructor(public name: string, public category: string) {}
  @methodDecorator
  getDetails(calledBy: string) {
    console.log(`det details method called by ${calledBy}`);
  }
}

var anyFood = new Food("Mango", "Fruit");
// decorators are called once, when the target is declared, no metter how many times you create a instance (for class decorator). or hw many times you call method in case of method decorators.
// do not know reason but method decorators are called first then class decorators, seems like inner most in hierarcchi are called early.
//

// anyFood.getDetails();
// anyFood.getDetails();

var anyOtherFood = new Food("Curry", "Veg");

// Decorator factory
// Above use cases were used directly and given a function reference with @, we can use factory function whihc will return a decorator function
// in angular most of places you will see this thing.

function uiElement(name: string) {
  return function(target: Function) {
    console.log(`new element got created ${name}`);
    console.log(target);
  };
}

@uiElement("Plants")
class Plants {
  constructor(public category: string) {}
}

var anyPlant = new Plants("Any thing");
