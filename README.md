# LLVM IR Visualizer

Forked from [GraphvizOnline](https://github.com/dreampuf/GraphvizOnline). Modified to fit the need for drag and drop llvm IR files and see CFGs immediately.

## Environment requirements

You will need:

- `opt` from llvm
- `nodejs` (14 or higher)
- Typescript compiler

You might check if you meet the requirements by running following commands:

```bash
$ opt --version
Ubuntu LLVM version 15.0.6
  Optimized build.
  Default target: x86_64-pc-linux-gnu
  Host CPU: znver3
$ node --version
v16.19.1
$ tsc --version
Version 4.9.3
```

## How to compile

Source codes are written in `.ts` files and need to be compiled into `.js` files to execute. You will have to execute the following command:

```bash
$ tsc --build tsconfig.json
```

to build `.ts` files.

## How to start server

After compiling `.ts` into `.js` files, you may start server by running:

```bash
$ node main.js
```

If everything is successful, you should see something like this:

```bash
$ node main.js
Server running at http://127.0.0.1:3000/
```

## To-do list

- [ ] Add options to generate callgraph / dom-tree / post dom-tree
- [ ] Add command line options to change port
