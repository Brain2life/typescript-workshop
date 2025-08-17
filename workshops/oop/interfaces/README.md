# Interfaces

Interfaces in TypeScript are a powerful tool for defining the **shape** of an object. They act as a contract that specifies the properties and methods an object must have. Think of an interface as a blueprint for an object, but without any implementation details. It's a way to enforce type-checking and ensure that your code adheres to a certain structure.️

## Core Concepts

  * **Type-Checking and Contracts**: The primary role of an interface is to enforce a consistent structure. When a class or an object is declared to implement or conform to an interface, the TypeScript compiler checks to ensure it contains all the required properties and methods with the correct types. If it doesn't, the compiler will throw an error, helping you catch bugs early.
  * **Readability and Maintainability**: By defining interfaces, you make your code more readable. Other developers (or even your future self) can quickly understand what an object is supposed to look like just by looking at its interface definition. This makes the code easier to maintain and refactor.
  * **Abstraction**: Interfaces provide a way to achieve abstraction in TypeScript. You can define a set of methods that a class must implement without specifying how those methods work. This allows you to write code that interacts with the interface, rather than with a specific implementation, making your code more flexible and reusable.

## Key Features and Syntax

Here's a simple example of an interface:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): void;
}
```

This interface `Person` specifies that any object that implements it must have `firstName`, `lastName`, and `age` properties of the specified types, and a method `greet()` that returns `void`.

You can use this interface to type an object:

```typescript
const user: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};
```

You can also use interfaces with classes:

```typescript
class Employee implements Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(first: string, last: string, age: number) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}, a new employee.`);
  }
}
```

  * **Optional Properties**: You can make a property optional by adding a `?` after its name.

    ```typescript
    interface Car {
      brand: string;
      model?: string;
    }
    ```

  * **Read-only Properties**: You can make a property read-only by using the `readonly` keyword. This prevents the property from being changed after it's been initialized.

    ```typescript
    interface Point {
      readonly x: number;
      readonly y: number;
    }
    ```