/*1. Variable Typing Practice
Create a variable studentName of type string, studentAge of type number, and isPassed of type boolean. Assign appropriate values to them.*/

const studentName: string = "Sajid";
const studentAge: number = 20;
const isPassed: boolean = true;

/** 2. Array Practice
Create an array called fruits that can only contain strings. Add at least 3 fruits to the array. */
const fruits: string[] = ["banana", "apple", "orange"];

/** 
 * 3. Tuple Practice
Create a tuple called person that contains a string (name), a number (age), and a boolean (isMarried).
 */
const person: [name: string, age: number, isMarried: boolean] = [
    "Sajid",
    20,
    false,
];

/**
 * 4. Enum Practice
Create an enum called Direction with values: Up, Down, Left, and Right.
Create a variable and assign it the Direction.Left value.
 */

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const currentDirection = Direction.Down;

/**
 * 5. Union Type Practice
Create a variable called userId that can either be a string or a number.
 */

function printUserId(userId: string | number) {
    return userId;
}
printUserId(839338);

/**
 * 6. Intersection Type Practice
Create two types:

Employee → with name (string) and employeeId (number)

Manager → with level (number)

Then create a variable that combines both types using an intersection and assign values.
 */

const EmployeeName = "sajid";
const employeeId = 636072;
const level = 1;

/**
 * 7. Simple Function Practice with Type Annotations
Write a function called addNumbers that accepts two numbers and returns their sum.
(Use TypeScript type annotations properly.)
 */

const addNumbers = (a: number, b: number) => {
    return a + b;
};

addNumbers(34, 34);

/**
 * 8. Simple Problem Using All Concepts Together
Create a function printPersonInfo that accepts a parameter with:

name (string),

age (number),

gender ("male" | "female" — union type).

Inside the function, print a message like:
"John is 25 years old and is male."
 */
type Gender = "male" | "female";

function printPersonInfo(name: string, age: number, gender: Gender) {
    console.log(`${name} is ${age} years old and is ${gender}`);
}

printPersonInfo("Sajid", 20, "male");
