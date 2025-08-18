## `ts-node` REPL CLI for Typescript

[**ts-node**](https://www.npmjs.com/package/ts-node) is a command-line tool that lets you run TypeScript files directly without having to compile them to JavaScript first. It's essentially a TypeScript execution engine for Node.js.

***
## Key features

* **On-the-fly compilation**: ts-node compiles your TypeScript code to JavaScript in memory, which allows you to run it immediately. This speeds up your development workflow, as you don't have to wait for a separate build step every time you make a change.
* **REPL support**: It provides an interactive read-eval-print loop (REPL) for TypeScript, which is great for quick testing and debugging.
* **Module resolution**: ts-node correctly resolves TypeScript module paths, including those configured in your `tsconfig.json` file.
* **Debugging**: You can debug your TypeScript code directly using ts-node with popular debuggers like Visual Studio Code.

***
## How it works

At its core, ts-node uses a **Just-in-Time (JIT)** compilation approach. When you run a command like `ts-node my-script.ts`, it intercepts the request, transpiles the TypeScript code to JavaScript, and then executes the resulting JavaScript using the Node.js runtime. This process happens seamlessly and automatically.

While ts-node is a powerful tool for **development** and **prototyping**, it's generally not recommended for production environments. This is because the JIT compilation adds a small performance overhead. For production, it's better to pre-compile your TypeScript code to JavaScript using the standard TypeScript compiler (`tsc`) and then run the compiled JavaScript files.

## Alternatives

One of the best alternatives to `ts-node` is [`tsx`](https://www.npmjs.com/package/tsx) project.

To install `tsx` globally:
```bash
npm install -g tsx
```

To execute the file:
```bash
tsx file.ts
```


## References
- [2024: The End of ts-node? Here’s What You Need to Know.](https://www.youtube.com/watch?v=-7dNs1ggKRs)