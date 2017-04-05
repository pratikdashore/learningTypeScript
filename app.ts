
class helloWorld{    
    constructor (public message : string){}
    start(){
        console.log(this.message);
    }
}

var hello = new helloWorld('Hello TypeScript');
var test : number = 5;
hello.start();
var student1 = new student('Dashore','Pratik');
console.log(student1.height);

var car = new Car('Sedan','Black','Honda Civic');
car.run(100);
console.log(car.details);

