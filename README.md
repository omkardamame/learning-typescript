# TypeScript Core Learning – GitHub Practice Repo (Bun)

This repository is for **daily hands-on practice** to rebuild programming fundamentals and become a **junior backend engineer** using **TypeScript with Bun**.

You will **write all code yourself** and commit progress regularly.

---

## Prerequisites
- Bun (latest)
- Git
- Basic terminal usage

---

## Project Setup

```bash
bun init --yes
bun i -D @types/express
bun i express
```

Add scripts to `package.json`:
```json
{
  "scripts": {
    "dev": "bun --watch app.ts",
    "start": "bun app.ts"
  }
}
```

---

## Folder Structure

```
src/
  01-basics/
  02-functions/
  03-arrays-objects/
  04-control-flow/
  05-types/
  06-async/
  07-error-handling/
  08-modules/
  09-mini-projects/
index.ts
```

---

## Learning Roadmap

### 01 – Basics
- Variables (`let`, `const`)
- Primitive types
- Console output

**Tasks**
- Declare typed variables
- Simple calculations
- String interpolation

---

### 02 – Functions
- Function declarations
- Return types
- Parameters
- Arrow functions

**Tasks**
- Calculator functions
- Input/output typing

---

### 03 – Arrays & Objects
- Typed arrays
- Object typing
- Nested objects

**Tasks**
- User list management
- Filter, map, reduce

---

### 04 – Control Flow
- `if / else`
- `switch`
- Loops (`for`, `while`)

**Tasks**
- Validation logic
- Iteration utilities

---

### 05 – TypeScript Types
- `type` vs `interface`
- Optional properties
- Readonly
- Enums

**Tasks**
- Model real entities
- Type-safe functions

---

### 06 – Async Programming
- Promises
- `async / await`
- Simulated API calls

**Tasks**
- Async data fetch
- Sequential vs parallel execution

---

### 07 – Error Handling
- `try / catch`
- Custom errors
- Type narrowing

**Tasks**
- Fail-safe functions
- Error-first design

---

### 08 – Modules & Imports
- `import / export`
- Folder-based modules

**Tasks**
- Utility libraries
- Clean architecture basics

---

### 09 – Mini Projects
Build without tutorials:
- CLI Todo App
- File-based Notes App
- In-memory Auth System

---

## Rules
- No copy-paste from tutorials
- One concept per commit
- Write meaningful commit messages
- Keep code readable

---

## Goal

By completing this repo, you should:
- Think in TypeScript
- Write type-safe backend code
- Be ready for Node.js/Bun backend APIs

---