"use strict";
// Basic Types
let id = 5;
let company = "Anitor Abraham";
let isPublished = true;
let x = "Hello";
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// Tuple , you can specify the exact types in the array.
let person = [1, "Anitor", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Abraham"],
];
//Union , You can set a variable more than one type.
let pid;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 3));
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const p1 = 5;
