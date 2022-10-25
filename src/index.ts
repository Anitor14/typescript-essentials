// Basic Types
let id: number = 5;
let company: string = "Anitor Abraham";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

// Tuple , you can specify the exact types in the array.
let person: [number, string, boolean] = [1, "Anitor", true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Abraham"],
];
//Union , You can set a variable more than one type.
let pid: string | number;
// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Left);

// Objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(5, 3));

// void
function log(message: string | number): void {
  console.log(message);
}

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "John",
};

type Point = number | string;
const p1: Point = 5;
