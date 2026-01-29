/*--------------------------------------------------*/
/* Type annotations (core syntax) */

// let variableName: Type;

const price: number = 100
let status: string = "pending"

// type annotations are used to explicitly specify the type of a variable, function parameter, return value, or object property. They use a colon (:) followed by the desired type, enhancing code clarity, enabling static type checking, and improving tooling support in IDEs

/*--------------------------------------------------*/
/* Primitive types: string, number, boolean */

const old_username: string = "Omkar"
const age: number = 28
const isAdmin: boolean = true

/*--------------------------------------------------*/
/* null vs undefined */

let token: string | undefined
console.log(`This is the value of token: ${token}`)                                     // This will output `undefined`

let address: string | null     
console.log(`This is the value of address: ${address}`)                                   // This will be considered as address can be a string or null but it is currently undefined. We must assign a value before reading it.

let email: string | null = null
console.log(`This is the value of email: ${email}`)                                     // This will be considered as email can be string or null but we are letting it to be null explicitely for now. Also this can be read immediately.

/*--------------------------------------------------*/
/* Console output*/

/* Syntax is 
console.log("your_text_here")
console.log(variable)
console.log(`Your text here ${variable}`)

Used for: Debugging, Tracing flow, Logging state
*/

/*--------------------------------------------------*/
/* Template literals (use this, not string + string) */

const name = "Omkar"
const role = "Admin"

console.log(`User ${name} has role ${role}`)
// Avoid this - console.log("User " + name + " has role " + role)

/*--------------------------------------------------*/
/* Basic operators */
// Arithmetic

const sum = 10 + 5
console.log(sum)

const remainder = 10 % 3
console.log(remainder)

// Comparison (ALWAYS use ===)

const isTrue = 10 ===10 
console.log (isTrue)

const isTrue2 = 10 !== 5
console.log (isTrue2)

/*--------------------------------------------------*/
/* Logical operators */

let username: string | null = null;
let displayName = username ?? "Guest"; // Results in "Guest"

console.log(displayName)

/*
Short-Circuit Evaluation
One "pro tip" to remember: Logical operators short-circuit.

`&&`: If the first part is `false`, it stops immediately because the whole thing can't be `true`.

`||`: If the first part is `true`, it stops because the whole thing is already guaranteed to be `true`.
*/

/* Optional Chaining operator */

let user = { profile: { name: "Alex" } };
console.log(user?.profile?.name); // "Alex"

/*

Optional Chaining operator (?.) as a safety inspector that checks if a door is unlocked before trying to walk through it.

In standard JavaScript/TypeScript, if you tried to access a property on something that was undefined, your code would "crash" with a TypeError. This operator prevents that.

Breaking Down the Code
In your specific example: user?.profile?.name

user?: The code asks, "Does user exist?"
If yes, move to .profile.

If user was null or undefined, it stops immediately and returns undefined instead of crashing.

.profile?: "Does profile exist inside user?"
If yes, move to .name.

If profile was missing, it stops and returns undefined.

.name: Finally, it grabs the value "Alex".

Why is this useful?
Imagine you are fetching data from an API, and sometimes the profile is missing.

Without ?. (The "Old" Way)
You would have to write a long, messy if statement to avoid errors:

if (user && user.profile && user.profile.name) {
    console.log(user.profile.name);
}

With ?. (The Modern Way)
You condense all those checks into one clean line. It’s essentially a "short-circuit" for property access.

Important Rule
The operator cannot be used on the left side of an assignment. You can't do: user?.profile?.name = "Sam"; // ❌ This will throw an error

It is strictly for reading data safely.

*/

/*--------------------------------------------------*/
/* Simple functions with return types */

// 1. Basic Syntax

function getGreeting(name: string): string {
  return `Hello, ${name}!`;
}

console.log(getGreeting("Meth Meth"))

// You place the return type after the parentheses `()` using a colon `:`
// `name: string`   - The input must be a string.
// `): string`      - The output must be a string.

/* 2. Common Return Type Examples */

// 2.1 Returning Numbers
// Useful for calculations. TypeScript will alert you if your math accidentally results in something else.

function add(a: number, b: number): number {
    let c = a + b
    return c;
    // You can also do this - return a + b; 
}

console.log(`Doing the addition of 60 and 9 = ${add(60,9)}`)

// 2.2 Returning Booleans (Predicates)
// Common for "check" functions or filters.

function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(`Is our bro adult at 28 = ${isAdult(28)}`)

// 2.3 The `void` Type
// If a function doesn't return anything (like just logging to the console), we use void. It basically means "returns nothing."

function logMessage(message: string): void {
  console.log("Log:", message);
  // No return statement here
}

// 2.4 Arrow Functions
// You can also apply return types to arrow functions. The syntax looks like this:

const multiply = (x: number, y: number): number => {
  return x * y;
};

console.log(`Doing the multiplication of 23 and 3 = ${multiply(23,3)}`)