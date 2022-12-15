interface IPerson {
  name: string;
  age: number;
}

class StudentPerson implements IPerson {
  constructor(
    public name: string,
    public age: number,
    public rollNumber: string
  ) {}
}

class Employee implements IPerson {
  constructor(
    public name: string,
    public age: number,
    public employeeId: number
  ) {}
}

function printAllMembers(person: IPerson) {
  console.dir(person);
}

let pratikS = new StudentPerson("Pratik", 27, "0817EC081049");

let pratikE = new Employee("Pratik", 27, 100125);

printAllMembers(pratikS);
printAllMembers(pratikE);

////////////////////// union type ///////////////////////////////////////////////

let person: StudentPerson | Employee;
person = pratikS;
person = pratikE;

///////////////////////////////// intersection type ////////////////////////

let person2: StudentPerson & Employee;
person2 = { ...pratikS, employeeId: 20 };

//////////////////// declaration merging //////////////////////////////

interface IMerge {
  name: string;
  getDetails: () => void;
}

interface IMerge {
  title: string;
  age: number;
}

class merger implements IMerge {
  name: string;
  getDetails: () => void;
  title: string;
  age: number;
}
