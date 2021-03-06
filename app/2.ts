class Student {

  public lName?: string;
  public fName: string;
  public id: number;
  private _height: number;

  set height(value: number) {
    this._height = value;
  }

  get height(): number {
    return this._height;
  }

  constructor(lName: string, fName: string, height?: number) {
    this.lName = lName;
    this.fName = fName;
    this.height = height;
  }
}


var student1 = new Student('Dashore', 'Pratik', 10);
console.log(student1.height);

function printMe<T>(arg: T): T {
  console.log(arg);
  return arg;
}

var numberPrinter: <Number>(arg: Number) => Number = printMe;

var xNumber = printMe<number>(100);

class Test<T, U>{
  obj: T;
  name: U;
}

var test = new Test<Student, string>();
test.obj = new Student('Pratik', 'Dashore');
test.name = 'Pratik';
