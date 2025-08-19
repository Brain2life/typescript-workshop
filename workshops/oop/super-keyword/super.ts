// Base (Parent) Class
// super() - calls the base class with any arguments that you pass into it and populates the child constructor
class User {
    
    // Special method (function) that initializes the properties of the newly created object of this class
    constructor(
        private name: string,
        private age: number,
        public isProDev?: boolean
    ) {}
}

// Class that extends the base class and adds additional properties
class Developer extends User {
    // Constructors for derived classes must contain a 'super' call
    constructor(
        name: string,
        age: number,
        private skills: string[],
        public isProDev?: boolean
    ) {
        super(name, age, isProDev)
    }
}

const dev = new Developer("John", 32, ["Typescript", "Javascript"]);

console.log(dev);