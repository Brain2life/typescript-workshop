// Exercise 2: Adding Type Annotations
function greet(name: string): string {
    return "Hello, " + name;
}

// This will show an error. Type annotations are not a part of JS. 
// JS doesn’t understand or enforce types - it relies on runtime behavior.
console.log(greet(123))