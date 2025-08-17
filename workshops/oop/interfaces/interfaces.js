// Interfaces
// See https://www.youtube.com/watch?v=VbW6vWTaHOY
// Create variable 'me' with Interface type
var me = {
    name: 'Maxat',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    },
    // skills: [] // Error: Object literal may only specify known properties, and 'skills' does not exist in type 'IsPerson'.
};
var greetPerson = function (person) {
    console.log('hello', person.name);
};
greetPerson(me);
