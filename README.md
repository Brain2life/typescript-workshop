# typescript-workshop

![](./img/ts_logo.png)

## What is TypeScript?

**[TypeScript](https://www.typescriptlang.org/)** (or **TS**) is a free, open-source programming language created by Microsoft. It builds on JavaScript by adding static typing, which means you can define the types of variables and functions to catch errors early - before your code runs.

TypeScript is especially helpful for building large and complex applications. It doesn’t run directly in browsers or servers, so it needs to be **transformed into JavaScript** first - a process called **transpiling**. You can use the built-in TypeScript Compiler for this, or use tools like [Babel](https://babeljs.io/).

You can write TypeScript for both **front-end (browser)** and **back-end (server)** development, using platforms like [Node.js](https://nodejs.org/en), [Deno](https://deno.com/), or [Bun](https://bun.sh/).


## Handbook
- [TS is a superset of JS](#ts-is-a-superset-of-js)
- [BigInt in TypeScript](#bigint-in-typescript)
- [References](#references)

## Workshops
- [TS is a superset of JS](./workshops/ts-js-superset/)
- [FreeCodeCamp TS tutorial workshop files](./workshops/freecodecamp-ts/)

### TS is a superset of JS 

![](./img/ts_superset.png)

This means that TypeScript is a programming language that builds on JavaScript by adding extra features, primarily static typing, while still including all of JavaScript's functionality. 

- **Superset**: A superset is a language that encompasses everything in another language (JavaScript, in this case) and extends it with additional capabilities. This means any valid JavaScript code is also valid TypeScript code.
  
- **JavaScript (JS)**: JavaScript is a dynamic, loosely-typed programming language widely used for web development. It doesn't require specifying data types for variables (e.g., `let x = 5` can later become `x = "hello"` without issue).

- **TypeScript (TS)**: TypeScript is an open-source language developed by Microsoft that adds static typing and other features to JavaScript. For example, in TypeScript, you can declare a variable with a specific type, like `let x: number = 5`, and attempting to assign a non-number (e.g., `x = "hello"`) will cause a compile-time error.

- **Key Additions in TypeScript**:
  - **Static Typing**: Developers can define types for variables, function parameters, and return values, catching type-related errors during development.
  - **Interfaces and Generics**: These allow for better structuring and reusability of code.
  - **Advanced Tooling**: Features like autocompletion, type inference, and better IDE support improve development efficiency.
  - **Compile to JavaScript**: TypeScript code is transpiled (converted) into JavaScript before running in browsers or Node.js, ensuring compatibility.

- **Why a Superset?**: Since TypeScript includes all JavaScript syntax and behavior, you can write plain JavaScript in a TypeScript file, and it will work. However, TypeScript's additional features (like types) provide more robust error checking and scalability, especially for large projects.

In short, TypeScript extends JavaScript by adding optional features like static types, making it more powerful for developers while remaining fully compatible with JavaScript.

## BigInt in TypeScript
In TypeScript (and JavaScript), [`bigint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is a **primitive data type** used to represent **very large integers** that cannot be safely represented by the default `number` type.

---

### Why was `bigint` introduced?

In JavaScript/TypeScript, the standard `number` type is a **64-bit floating point number (IEEE 754)**, which can **safely represent integers only in the range**:

```
-(2^53 - 1) to 2^53 - 1
≈ -9,007,199,254,740,991 to 9,007,199,254,740,991
```

This is known as `Number.MAX_SAFE_INTEGER`.

But applications like cryptography, financial systems, or scientific computing often require **integers larger than this safe range**.

Thus, `bigint` was introduced to:

* Handle integers beyond the `number` type limit
* Avoid precision loss for large integers
* Support arbitrary precision arithmetic

---

### Syntax in TypeScript

```ts
const big1: bigint = 123456789012345678901234567890n;
const big2 = BigInt("123456789012345678901234567890");
```

You can create a `bigint` using:

* The `n` suffix (e.g., `123n`)
* The `BigInt()` function

---

### Key Notes

* `bigint` and `number` are **not interchangeable**; you **cannot mix** them in operations directly.

```ts
const a: number = 10;
const b: bigint = 10n;
console.log(a + b); // ❌ Error: Cannot mix BigInt and other types
```

You need to convert explicitly.

* No decimal points are allowed in `bigint` values:

```ts
10.5n; // ❌ SyntaxError
```

---

The purpose of inventing `bigint` in TypeScript is to provide **accurate support for arbitrarily large integers**, especially important in domains like cryptography and high-precision computation where `number` falls short.

## References
- [Docs: The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [FreeCodeCamp: Learn TypeScript – Full Tutorial](https://www.youtube.com/watch?v=30LWjhZzg50)