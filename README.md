# learning-typescript

Initialize bun

```bash
bun init
```

By default, it creates `index.ts` which you should rename to `app.ts`.

To install dev dependencies:

```bash
bun install -D @types/express
```

To install prod dependencies

```bash
bun install express
```

In `package.json`, add this

```json
  "scripts": {
    "dev": "bun --watch app.ts",
    "start": "bun app.ts"
  },
```

To run:

```bash
bun run app.ts
```

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.