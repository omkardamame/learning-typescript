# `let` vs `const` in TypeScript (Backend-Focused Notes)

This document explains **`let` vs `const`** using real backend-style examples and practical rules you should follow while writing TypeScript.

---

## Core Rule (Memorize This)

> **Use `const` by default.**  
> **Use `let` only when reassignment is required.**

This rule is followed in real-world backend codebases.

---

## Basic `const` Examples

```ts
const port = 3000
const appName = "api-server"
```

### Key Points
- Semicolons (`;`) are optional in TypeScript
- You **cannot reassign** a `const` variable
- `const` means the **binding is immutable**

❌ Invalid:
```ts
port = 4000
```

---

## `const` with Objects (Very Important)

```ts
const user = {
  id: 1,
  name: "Omkar",
  weight: 90
}
```

```ts
console.log(user.weight)

user.name = "Admin"     // ✅ allowed
user.weight = 80        // ✅ allowed
user.address = "India"  // ✅ allowed

// user = {}            // ❌ not allowed
```

### Why is this allowed?

- `const` **protects the reference**, not the internal structure
- The object reference cannot change
- **Object properties are mutable**

> `const` object ❌ immutable  
> object **properties** ✅ mutable

---

## Output Example

```ts
console.log(
  `Username is ${user.name} and the id is ${user.id} and weight is ${user.weight}, address ${user.address}`
)
```

### Output
```
Username is Admin and the id is 1 and weight is 80, address India
```

---

## Common Misconception (Corrected)

❌ Incorrect statement:
> Properties cannot be defined outside of the object

✅ Correct statement:
> Properties **can be added or modified**, but the **object reference cannot be reassigned**.

---

## `let` — Reassignment Allowed

```ts
let counter = 0

counter = counter + 1
console.log(counter)

counter += 1
console.log(counter)
```

### When to Use `let`
- The value **will change over time**
- Counters, accumulators, temporary state

---

## Backend Mental Model

Ask yourself:

> **Will I ever reassign this variable?**

- **No** → use `const`
- **Yes** → use `let`

### Real Backend Example
```ts
const PORT = process.env.PORT ?? 3000
let serverStatus = "starting"
```

---

## Scope Rules (Very Important)

Both `let` and `const` are **block-scoped**.

```ts
if (true) {
  const x = 10
  let y = 20
}

// console.log(x) // ❌ ReferenceError
// console.log(y) // ❌ ReferenceError
```

### Error Example
```
ReferenceError: x is not defined
```

This behavior **prevents accidental bugs** and is why `var` should never be used.

---

## Why You Should Never Use `var`

- Function-scoped (not block-scoped)
- Causes unpredictable bugs
- Not used in modern backend code

> **Rule:** Never use `var` in TypeScript.

---

## Summary Table

| Feature | `const` | `let` |
|------|------|------|
| Reassignment | ❌ No | ✅ Yes |
| Block scoped | ✅ | ✅ |
| Default choice | ✅ Yes | ❌ No |
| Backend usage | High | Only when needed |

---

## Practice Task

Create a file:
```
src/01-basics/let-vs-const.ts
```

Write:
- 3 correct `const` examples
- 2 correct `let` examples
- 1 incorrect example (commented)

Commit with:
```
feat: add let vs const basics
```

---

## Done Criteria

You are done when:
- Code runs without errors
- You can explain every line
- You know **why** each variable is `let` or `const`