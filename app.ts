
/// <reference path="./libs/jquery.d.ts" />
/// <reference path= "./app/4.ts" />
/// <reference path="./app/5.ts" />

import m4 = m_4;
import { m_5 } from './app/5';
import m6 = require('./app/5');

class helloWorld {
    constructor(public message: string) { }
    start() {
        console.log(this.message);
    }
}

var hello = new helloWorld('Hello TypeScript');
var test: number = 5;
hello.start();

var engineer = new m4.Engineer('Pratik', 49, 'E.C.E.');
var student1 = new student('Dashore', 'Pratik');
console.log(student1.height);

var car = new Car('Sedan', 'Black', 'Honda Civic');
car.run(100);
console.log(car.details);
