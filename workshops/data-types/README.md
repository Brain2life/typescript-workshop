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
