# TypeScript Core Learning – GitHub Practice Repo (Bun)

This repository is for **daily hands-on practice** to rebuild programming fundamentals and become a **junior backend engineer** using **TypeScript with Bun**.

You will **write all code yourself** and commit progress regularly.

---

## Prerequisites
- Bun (latest)
- Git
- Basic terminal usage

---

## Project Setup (Initial – No Frameworks)

```bash
bun init --yes
```

Add scripts to `package.json`:
```json
{
  "scripts": {
    "dev": "bun --watch src/app.ts",
    "start": "bun src/app.ts"
  }
}
```

---

## Folder Structure

```
src/
  app.ts
  01-basics/
  02-functions/
  03-arrays-objects/
  04-control-flow/
  05-types/
  06-async/
  07-error-handling/
  08-modules/
  09-mini-projects/
```

---

## Learning Roadmap + Weekly Targets

### Week 1 – Programming Foundations

#### 01 – Basics (Day 1)
**Topics**
- [ ] `let` vs `const`
- [ ] Primitive types: `string`, `number`, `boolean`
- [ ] `null` and `undefined`
- [ ] Type annotations
- [ ] Console output
- [ ] Template literals
- [ ] Basic operators (`+ - * / %`, `===`, `&&`, `||`)
- [ ] Simple functions with return types

**Tasks**
- Declare typed variables
- Write simple calculations
- Print formatted output using template literals
- Write basic utility functions
- Import basics into `app.ts`

**Done When**
- Code compiles with Bun
- You can explain every line
- 3–5 small commits are made

---

- [ ] 02 – Functions  
- [ ] 03 – Arrays & Objects  

**Outcome**
- Comfortable writing functions
- Can manipulate arrays/objects
- Understands basic typing

---

### Week 2 – Control Flow & Type Safety
- [ ] 04 – Control Flow  
- [ ] 05 – TypeScript Types  

**Outcome**
- Confident with `type` vs `interface`
- Models real-world entities
- Writes predictable code

---

### Week 3 – Async, Errors & Structure
- [ ] 06 – Async Programming  
- [ ] 07 – Error Handling  
- [ ] 08 – Modules & Imports  

**Outcome**
- Understands async execution
- Handles failures correctly
- Organizes code cleanly

---

### Week 4 – Mini Projects + Express Introduction
- [ ] 09 – Mini Projects  

**Install Express only now**
```bash
bun i express
bun i -D @types/express
```

**Mini Projects**
- [ ] CLI Todo App
- [ ] File-based Notes App
- [ ] In-memory Auth System (Express)

**Outcome**
- First backend-style app
- Ready for DB-backed APIs next

---

## Rules
- No copy-paste from tutorials
- One concept per commit
- Write meaningful commit messages
- Code must compile before commit

---

## Goal

By completing this repo, you should:
- Think in TypeScript
- Debug confidently
- Transition into Express + DB backends