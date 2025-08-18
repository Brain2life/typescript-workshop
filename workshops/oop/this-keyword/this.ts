// this = is a reference to the current object/context in which code is running.

// 'this' refers to the context of person1 class
const person1 = {
    name: "SpongeBob",
    favFood: "KrabbyPatty",
    sayHello: function() {
        console.log(`Hi! I am ${this.name}`);
    },
    eat: function() {
        console.log(`${this.name} is eating ${this.favFood}`);
    }
}

// 'this' refers to the context of person2 class
const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function() {
        console.log(`Hi! I am ${this.name}`);
    },
    eat: function() {
        console.log(`${this.name} is eating ${this.favFood}`);
    }
}

person1.sayHello();
person2.eat();

// In web browser the command below will return the current context: 'window' object
// console.log(this);