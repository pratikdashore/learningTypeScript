/////////////////////// Premitive data types  ///////////////////////////////////

var aNum = 5;

var aString = 'Pratik';

var bString: string = 'Dashore';

var abString = aNum + bString;

var aArray: string[] = ['pratik', 'dashore'];

var x = aArray[0];

var aAny;

var aBoolean: boolean = true;

var aNull: number = null;

var aUndefined: number = undefined;


/////////////////////////// Object types  /////////////////////


// Functions, class, module, interface, and literal types

var aObject: Object = {};

////////////////////// functions /////////////////////////////////

//declaration
var greetMe: (msg: string, name: string) => void;

//assignment
greetMe = function (msg: string, name: string) {
    console.log(msg + ' ' + name);
};

//combined
var greetUs = (msg: string, name: string): void => {
    console.log(msg + ' ' + name);
}





//////////////////////// ambient declaration ///////////////////


declare var document: Document;



///////////////////////////// Type Definition files /////////////


///<reference path="jquery.d.ts"/>





