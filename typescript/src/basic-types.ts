// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = "red";
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
let colorName: string = Color[1];
console.log(colorName); // Displays 'Green' as its value is 2 above

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// Object
let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// Void
function warnUser(): void {
  console.log("This is my warning message");
}
let unusable: void = undefined;

// Null & Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
function fail() {
  return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

// Type Assertion
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
