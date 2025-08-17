// Interfaces
// See: https://www.youtube.com/watch?v=VbW6vWTaHOY

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// Create variable 'me' with Interface type
const me: IsPerson = {
    name: 'Maxat',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    },
    // skills: [] // Error: Object literal may only specify known properties, and 'skills' does not exist in type 'IsPerson'.
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me);