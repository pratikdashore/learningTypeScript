// Destructuring Concepts

//Array Destructuring

function foo(): Number[] {
  return [1, 2, 3, 4];
}

var [a, b, c = 10, ...args] = foo();
console.log(a, b, c, args);

// it is array destructuring. if number of elements are more or less they are ignored or set as undefined based on number of return elements.

// nested array destructuring

var p, q, r, s, t, v, w;

[p, q, r, s, [t, , v], w] = [1, 2, 3, 4, [5, 6, 7], 8];

//it just works based on position.

/////
//Object destructuring

function fooObj() {
  return { fName: "Praik", lName: "Dashore", age: 20 };
}

var {
  //propertyName From source : target variable propety
  fName: firstName,
  lName: lastName,
  age: age = 20
} = fooObj();

//////// spread operators ////////////////////////////////

//////////// tuple types ///////////////////////////////

let mt: [number, string] = [10, "Pratik"];
