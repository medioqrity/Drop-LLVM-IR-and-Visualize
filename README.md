# LLVM IR Visualizer

## How to start server

Make sure you have nodejs (version >= 14) installed. Then execute:

```bash
node main.js
```

If everything is successful, you should see something like this:

```
Server running at http://127.0.0.1:3000/
```

## How to compile

Source codes are written in `.ts` files and need to be compiled into `.js` files to execute. You will have to execute the following command:

```bash
tsc --build tsconfig.json
```

to build `.ts` files.
