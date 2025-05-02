// Exercise 3: Adding TS Interfaces feature on top of JS
interface User {
  id: number;
  username: string;
}

function printUser(user: User) {
  console.log(user.id + ": " + user.username);
}

// This will work
printUser({ id: 1, username: "maxat" });
// This will fail in TS. However, if you will run JS it will work: node interfaces.js
printUser({ id: 1, username: 23 });
