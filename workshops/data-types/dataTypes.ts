// BOOLEAN: The most basic datatype is the simple true/false value
let isDone: boolean = false;

// NUMBER: As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers.
// These floating point numbers get the type `number`, while BigIntegers get the type `bigint`.
// Number type supports the following literals: bigint, hexadecimal, decimal, binary and octal.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// STRING: This type refers to textual data. 
// Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
let color: string = "blue";
color = 'red';

// TEMPLATE STRINGS: You can also use template strings, which can span multiple lines and have embedded expressions.
// These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
let fullName: string = `Maxat Akbanov`;
let age: number = 25;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

// ARRAY: Array types can be written in one of two ways. 
// In the first, you use the type of the elements followed by [] to denote an array of that element type:
let list: number[] = [1, 2, 3];

// The second way uses a generic array type, Array<elemType>:
let list2: Array<number> = [1, 2, 3]

// TUPLE: Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. 
let x: [string, number];
// Initialize it
x = ["hello", 10];
// This will give an error
x = [10, "hello"];

// ENUM: A helpful addition to the standard set of datatypes from JavaScript is the enum. 
// As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
// By default, enums begin numbering their members starting at 0.
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green