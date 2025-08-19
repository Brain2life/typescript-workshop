## `super` keyword

The `super` keyword in TypeScript is used to reference the parent class. It allows a subclass to access and call methods, as well as the constructor, of its superclass (the class it extends).

### Using `super` in the Constructor

In a subclass, the `super` keyword is used in the **constructor** to call the constructor of the parent class. This is a crucial step when a subclass has its own properties to initialize in addition to those inherited from the parent. The `super()` call must be the very first statement within the constructor of the child class.

```typescript
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // Calls the constructor of the Animal class
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // "Buddy"
console.log(myDog.breed); // "Golden Retriever"
```

-----

### Using `super` to Call Parent Methods

You can also use `super` to call a method from the parent class that has been **overridden** in the child class. This is helpful when you want to extend the functionality of the parent method rather than completely replace it.

```typescript
class Vehicle {
  getDetails(): string {
    return "This is a generic vehicle.";
  }
}

class Car extends Vehicle {
  getDetails(): string {
    // Calls the getDetails method from the parent class
    return super.getDetails() + " It has four wheels.";
  }
}

const myCar = new Car();
console.log(myCar.getDetails()); // "This is a generic vehicle. It has four wheels."
```

## References
- [DevTips Daily: The TypeScript super function / keyword](https://www.youtube.com/watch?v=P3mDEo0gB7A&t)