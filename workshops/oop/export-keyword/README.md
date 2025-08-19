# `export` keyword

In TypeScript, the `export` keyword makes a variable, function, class, or type available for use in other modules. Without `export`, a module's members are private and can't be accessed from outside that file.

## How `export` Works

`export` is fundamental to TypeScript's [**module system**](https://262.ecma-international.org/6.0/#sec-module-namespace-exotic-objects), which is based on the ES6 (ECMAScript 2015) module specification. A module is simply a file. When you use `export` in one file, you can use the `import` keyword in another file to access those exported members.

> **ES6**, also known as [**ECMAScript 2015**](https://262.ecma-international.org/6.0/), is the 6th edition of the ECMAScript language specification standard, published in June 2015. ECMAScript is the standard upon which JavaScript is based, and ES6 represents a significant and widely adopted update to the language, introducing a multitude of new features and enhancements.

There are two main types of exports:

### Named Exports

This is the most common way to export multiple members from a single module. You can export things individually or group them in a single `export` statement.

> **Named exports** require `{ }` braces, while default export doesn't require.

**Example 1: Individual Exports**

```typescript
// file: user.ts
export const name: string = "Alice";
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

**Example 2: Grouped Exports**

```typescript
// file: math.ts
const PI = 3.14159;
function add(a: number, b: number): number {
  return a + b;
}
export { PI, add };
```

To use these in another file, you would use named imports:

```typescript
// file: app.ts
import { name, greet } from './user';
import { PI, add } from './math';

console.log(greet(name)); // "Hello, Alice!"
console.log(add(PI, 10)); // 13.14159
```

### Default Exports

A module can have **only one** default export. This is useful for when the module's main purpose is to export a single class, function, or object. You use the `export default` syntax.

**Example**

```typescript
// file: logger.ts
class Logger {
  log(message: string): void {
    console.log(`[INFO]: ${message}`);
  }
}
export default Logger;
```

To import a default export, you can give it any name you like when you import it.

```typescript
// file: main.ts
import MyLogger from './logger';

const logger = new MyLogger();
logger.log("Application started");
```

## Aliasing with `as` keyword
When used with `import`, the `as` keyword serves a different purpose: **aliasing**. It allows you to give a different, more convenient or descriptive name to a named import.

### Why Use `as` for Aliasing?

Aliasing is useful for several reasons:

1.  **Resolving Naming Conflicts:** If you're importing members with the same name from different modules, aliasing prevents conflicts.

    ```typescript
    // file: user.ts
    export class User { /* ... */ }

    // file: group.ts
    export class User { /* ... */ }

    // file: app.ts
    import { User } from './user';
    import { User as GroupUser } from './group';

    const user = new User(); // from user.ts
    const group = new GroupUser(); // from group.ts
    ```

2.  **Using Shorter or Clearer Names:** Sometimes an exported member has a long or generic name. Aliasing allows you to shorten it or make its purpose clearer in your specific file.

    ```typescript
    // file: library.ts
    export function fetchAndParseData() { /* ... */ }

    // file: app.ts
    import { fetchAndParseData as getData } from './library';
    // Now you can use the shorter name 'getData'
    getData();
    ```

3.  **Renaming `export default`:** When you import a default export, you can give it any name you want. You don't need the `as` keyword for this.

    ```typescript
    // file: my-class.ts
    export default class MyClass { /* ... */ }

    // file: app.ts
    // No `as` needed here.
    import SomeName from './my-class';
    const instance = new SomeName();
    ```

## References
- [YouTube: JavaScript ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)