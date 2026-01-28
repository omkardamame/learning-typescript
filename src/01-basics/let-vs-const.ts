/*--------------------------------------------------*/

const port = 3000;
const appName = "api-server";

/* Comments
1. Semi colon (;) is not necessary
2. You cannot reassign const like port = 4000 after you defined it.
3. const - binding is immutable
*/

/*--------------------------------------------------*/

/* CORE RULE!
`const` by default.
Use `let` only when reassignment is required.
*/

const user = {
  id: 1,
  name: "Omkar",
  weight: 90
}                           // This is an Object

console.log(user.weight)

user.name = "Admin"         // ✅ allowed
// user = {}                // ❌ not allowed

user.weight = 80

user.address = 'India'

console.log(`Username is ${user.name} and the id is ${user.id} and weight is ${user.weight}, address ${user.address}`)

/* Output is 
`Username is Admin and the id is 1`
Why? Because const protects the reference, not the internal structure.
1. Basically the Object is immutable but not the properties.
2. Properties are mutable i.e. they can be changed.
3. Also properties cannot be defined outside of the Object.
*/

/*--------------------------------------------------*/

/* 
`let` — reassignment allowed
1. The variable will change
2. Use it when the value must evolve, if not use `const`
*/

/*
Backend mental model:
1. When writing backend code, ask:
2. Will I ever reassign this variable?

No → const
Yes → let
*/

let counter = 0

counter = counter + 1
console.log(counter)

counter += 1
console.log(counter)

/* 
Scope difference (important)
Both let and const are block-scoped.
*/

if (true) {
  const x = 10
  let y = 20
}

// console.log(x)

/* The error for above line
65 | if (true) {
66 |   const x = 10
67 |   let y = 20
68 | }
69 | 
70 | console.log(x)
                  ^
ReferenceError: x is not defined
      at /Users/omkar/Desktop/learning-typescript/src/app.ts:70:14
      at loadAndEvaluateModule (2:1)
*/

// x ❌ not accessible
// y ❌ not accessible
// They replace var (which you should never use).

/*
Real backend example
  const PORT = process.env.PORT ?? 3000
  let serverStatus = "starting"
*/