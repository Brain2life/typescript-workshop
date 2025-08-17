# Object-Oriented Programming in TypeScript

OOP stands for **Object-Oriented Programming**. It's a programming paradigm based on the concept of "objects," which can contain both data and the methods that operate on that data. This approach allows programmers to structure their code into reusable, modular units that model real-world entities.

## Core Principles of OOP

OOP is built on four fundamental principles:

* **Encapsulation**: This principle involves bundling data (attributes) and methods (functions) that operate on the data into a single unit, known as a **class**. Encapsulation also involves restricting direct access to some of an object's components, which prevents outside code from accidentally changing the object's internal state. Think of it like a car's engine; you can use the car (the object) through its controls (the public interface), but you can't directly manipulate the internal components of the engine without opening the hood. 
* **Abstraction**: This principle focuses on hiding complex implementation details and showing only the essential features of an object. It allows you to create simplified models of real-world entities. For example, when you use a smartphone, you interact with its interface (like tapping an icon) without needing to know the intricate code that makes the app run. Abstraction simplifies the user's interaction with the object.
* **Inheritance**: This principle allows a new class (the **subclass** or **child class**) to inherit properties and behaviors from an existing class (the **superclass** or **parent class**). This promotes code reuse and helps establish a "is-a" relationship. For example, a `Car` class and a `Motorcycle` class could both inherit from a `Vehicle` class, which would contain common attributes like `speed` and `color`.
* **Polymorphism**: This principle means "many forms" and allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to be used for different underlying data types. A classic example is a `print()` function that can work on different types of objects (integers, strings, etc.) and produce the correct output for each type. Another example is a `draw()` method that, when called on different shape objects (e.g., `Circle`, `Square`), executes the appropriate code to draw that specific shape.

## Components of OOP

- [Interfaces](./interfaces/)

## Resources
- [FreeCodeCamp: Learn Object-Oriented Programming in TypeScript](https://www.freecodecamp.org/news/learn-object-oriented-programming-in-typescript/)