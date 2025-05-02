Here are some practical exercises to help you understand how **TypeScript is a superset of JavaScript** - starting with valid JavaScript code and then adding TypeScript-only feature.

---

### Exercise 1: Valid JavaScript in TypeScript

**Task**: Create and copy this into a `.ts` file. 

```ts
// This is plain JavaScript — also valid TypeScript
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice"));
```

Run `tsc` (TypeScript compiler) and observe: it works just like in JavaScript.
```bash
tsc greet.ts
node greet.js
node greet.ts
```

---

### Exercise 2: Add Type Annotations

**Task**: Try calling `greet(123)` - TypeScript will show an error.

```ts
function greet(name: string): string {
  return "Hello, " + name;
}
```

💡 *Type annotations are not allowed in JavaScript, but TS helps you catch mistakes before runtime.*

---

### Exercise 3: Use Interfaces (TS-only feature)

**Task**: Change `username` to a number and see how TypeScript reacts.

```ts
interface User {
  id: number;
  username: string;
}

function printUser(user: User) {
  console.log(user.id + ": " + user.username);
}

printUser({ id: 1, username: "maxat" });
```

💡 *TS will throw an error, while JS will print the number*

For more information, see [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

These exercises demonstrate that:
- All **JavaScript code runs in TypeScript**
- TypeScript **adds features** to make your code more robust
- You can **gradually adopt** TypeScript features without rewriting everything
