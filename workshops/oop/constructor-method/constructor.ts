// For more information, see
// https://www.youtube.com/watch?v=HE5-kNUjkqs

class User {
    name: string;
    age: number;
    isProDev: boolean;

    // Sets the required arguments for initialization
    // '?:' - sets parameter as optional 
    constructor(name: string, age: number, isProDev?: boolean) {
        this.name = name;
        this.age = age;
        this.isProDev = isProDev ?? false;
    }
}

// Create an instance (object) of User Class
const user = new User("Torvalds", 45, true)
console.log(user)