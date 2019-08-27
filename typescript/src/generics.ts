// Hello World of Generics
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
let output2 = identity("myString");

// Working with Generic Type Variables
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}
function loggingIdentity2A<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}
function loggingIdentity2B<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

// Generic Types
function identity3<T>(arg: T): T {
  return arg;
}
let myIdentity3: <T>(arg: T) => T = identity3;

function identity4<T>(arg: T): T {
  return arg;
}
let myIdentity4: <U>(arg: U) => U = identity4;

function identity5<T>(arg: T): T {
  return arg;
}
let myIdentity5: {<T>(arg: T): T} = identity5;

interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identity6<T>(arg: T): T {
  return arg;
}
let myIdentity6: GenericIdentityFn = identity6;

interface GenericIdentityFnB<T> {
  (arg: T): T;
}
function identity7<T>(arg: T): T {
  return arg;
}
let myIdentity7: GenericIdentityFnB<number> = identity7;

// Generic Classes
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// Generic Constraints
interface Lengthwise {
  length: number;
}
function loggingIdentity8<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity8(3); // Error, number doesn't have a .length property
loggingIdentity8({length: 10, value: 3});

// Using Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let xx = { a: 1, b: 2, c: 3, d: 4 };
getProperty(xx, "a"); // okay
getProperty(xx, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Using Class Types in Generics
function create<T>(c: {new(): T; }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}
class ZooKeeper {
  nametag: string;
}
class Animals {
  numLegs: number;
}
class Bee extends Animals {
  keeper: BeeKeeper;
}
class Lion extends Animals {
  keeper: ZooKeeper;
}

function createInstance<A extends Animals>(c: new () => A): A {
  return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!