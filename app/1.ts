/////////////////////// Premitive data types  ///////////////////////////////////

var aNum = 5;

var aString = "Pratik";

var bString: string = "Dashore";

var abString = aNum + bString;

var aArray: string[] = ["pratik", "dashore"];

var x = aArray[0];

var aAny;

var aBoolean: boolean = true;

var aNull: number = null;

var aUndefined: number = undefined;

var aTupple: [string, number] = ["Pratik", 27];
aTupple[3] = 33;

// String literal types

var aStringM: "Manager" = "Manager";
var aStringE: "Employee" = "Employee";
// very useful when you wants to use as named constraints

var employee: "Manager" | "Employee" = aStringE;

// type aliases

type EmployeeCategory = "Manager" | "Employee";

var employee2: EmployeeCategory = aStringM;

/////////////////////////// Object types  /////////////////////

// Functions, class, module, interface, and literal types

var aObject: Object = {};

////////////////////// functions /////////////////////////////////

//declaration
var greetMe: (msg: string, name: string) => void;

//assignment
function greet(msg: string, name: string): void {
  console.log(msg + " " + name);
}

//combined
var greetUs = (msg: string, name: string): void => {
  console.log(msg + " " + name);
};

//////////////////////// ambient declaration ///////////////////

declare var document: Document;

///////////////////////////// Type Definition files /////////////

///<reference path="jquery.d.ts"/>
