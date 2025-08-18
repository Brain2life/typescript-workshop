# Constructor Method

A constructor is a special method in a class that's automatically called when a new object of that class is created. Its primary purpose is to initialize the object's properties and set up its initial state. 

## How It Works

When you use the `new` keyword to create an instance of a class, the constructor method is the first thing that runs. It takes arguments that are passed during the object's creation and uses them to assign values to the object's properties. This ensures that the object is in a valid and usable state from the moment it is created.

For example, consider a `Car` class. When you create a new `Car` object, you'd want to set its `brand`, `model`, and `year` right away. The constructor is the perfect place to do this.

## Syntax and Examples

In JavaScript and TypeScript, the constructor method is simply named `constructor`.

```typescript
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    console.log(`A new ${this.year} ${this.brand} ${this.model} has been created.`);
  }
}

// Creating a new Car object, which calls the constructor
const myCar = new Car("Honda", "Civic", 2022); 
// Output: A new 2022 Honda Civic has been created.
```

> ⚠️ **NOTE**  
> To make constructor function parameters optional, use `?:`. For example: `isProDev?: boolean`

## Key Roles of a Constructor

  * **Object Initialization**: It sets the initial values for the object's properties, ensuring they aren't left undefined.
  * **Encapsulation**: Constructors can enforce encapsulation by validating the data before assigning it to properties, ensuring the object's state is always consistent.
  * **Resource Allocation**: A constructor can be used to allocate necessary resources, like opening a file or establishing a database connection, that the object needs to function.

## References
- [DevTips Daily: The Typescript constructor function](https://www.youtube.com/watch?v=HE5-kNUjkqs)