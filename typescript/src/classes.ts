class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

// Inheritance
class Animal {
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  bark() {
      console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


class Animal2 {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake2 extends Animal2 {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}
class Horse2 extends Animal2 {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
  }
}
let sam = new Snake2("Sammy the Python");
let tom: Animal2 = new Horse2("Tommy the Palomino");

sam.move();
tom.move(34);

// Public, private, and protected modifiers
// public by default
class Animal3 {
  public name: string;
  public constructor(theName: string) { this.name = theName; }
  public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
// private
class Animal4 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

new Animal4("Cat").name; // Error: 'name' is private;

class Animal5 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}
class Rhino5 extends Animal5 {
  constructor() { super("Rhino"); }
}
class Employee5 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal5("Goat");
let rhino = new Rhino5();
let employee = new Employee5("Bob");

animal = rhino;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible

// protected
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error


class Person2 {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}
// Employee can extend Person
class Employee2 extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard2 = new Employee2("Howard", "Sales");
let john = new Person2("John");

// readonly
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
class SameOctopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}

// Accessors
class Employee6 {
  fullName: string;
}

let employee6 = new Employee6();
employee6.fullName = "Bob Smith";
if (employee6.fullName) {
  console.log(employee6.fullName);
}


const fullNameMaxLength = 10;
class EmployeeWithAccessors {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        
        this._fullName = newName;
    }
}
let employeeWithAccessors = new EmployeeWithAccessors();
employeeWithAccessors.fullName = "Bob Smith";
if (employeeWithAccessors.fullName) {
    console.log(employeeWithAccessors.fullName);
}

// Static properties
class Grid {
  static origin = {x: 0, y: 0};
  calculateDistanceFromOrigin(point: {x: number; y: number;}) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// abstract class
abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}
class AccountingDepartment extends Department {

  constructor() {
      super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
      console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type

// Advanced Techniques
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter2: Greeter2;
greeter = new Greeter2("world");
console.log(greeter.greet());

let SameGreeter = (function () {
  function SameGreeter(message) {
      this.greeting = message;
  }
  SameGreeter.prototype.greet = function () {
      return "Hello, " + this.greeting;
  };
  return SameGreeter;
})();

let samegreeter;
samegreeter = new SameGreeter("world");
console.log(greeter.greet());


class Greeter3 {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter3.standardGreeting;
      }
  }
}

let greeter1: Greeter3;
greeter1 = new Greeter3();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter3 = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter3: Greeter3 = new greeterMaker();
console.log(greeter3.greet());

// Using a class as an interface
class Point2 {
    x: number;
    y: number;
}

interface Point3d extends Point2 {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};