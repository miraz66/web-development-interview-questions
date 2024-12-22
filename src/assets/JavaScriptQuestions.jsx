export const JavaScriptQuestions = [
  {
    type: "basic",
    questions: [
      {
        id: 1,
        question: "What is JavaScript?",
        answer:
          "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language used to create dynamic and interactive content on websites. It is a core web technology, alongside HTML and CSS.",
      },
      {
        id: 2,
        question: "What is a variable?",
        answer: "A variable is a container for storing data values.",
      },
      {
        id: 3,
        question: "What is a function?",
        answer: "A function is a block of code that performs a specific task.",
      },
      {
        id: 4,
        question: "What is a loop?",
        answer:
          "A loop is a control structure that allows you to repeat a block of code multiple times.",
      },
      {
        id: 5,
        question: "What are the data types in JavaScript?",
        answer: "The data types in JavaScript include:",
        example: `
Primitive types: Number, String, Boolean, null, undefined, Symbol, BigInt
Non-primitive types: Object, Array, Function, Date, `,
      },
      {
        id: 6,
        question: "What is the difference between let, const, and var?",
        answer:
          "The difference between let, const, and var is that let and const are block-scoped, while var is function-scoped.",
        example: `
var: Declares a variable with function scope (or globally if declared outside a function) and is hoisted.
let: Declares a block-scoped variable and is not hoisted.
const: Declares a block-scoped, read-only constant that must be initialized during declaration.`,
      },
      {
        id: 7,
        question: "What is hoisting in JavaScript?",
        answer:
          " Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compile time. Only the declarations are hoisted, not the initializations.",
      },
      {
        id: 8,
        question: "What is a closure in JavaScript?",
        answer:
          'A closure is a function that "remembers" its lexical scope, even when the function is executed outside that scope. This allows functions to access variables from their outer function even after the outer function has finished executing.',
      },
      {
        id: 9,
        question: "What is the difference between == and ===?",
        answer:
          "== (loose equality) compares values for equality, performing type coercion if necessary.\n" +
          "=== (strict equality) compares both the value and the type, without type coercion.",
      },
      {
        id: 10,
        question: "What is a callback function?",
        answer:
          " A callback function is a function passed as an argument to another function and executed later, typically when an asynchronous operation completes.",
      },
      {
        id: 11,
        question: "What are higher-order functions?",
        answer:
          " Higher-order functions are functions that take other functions as arguments, return functions as results, or both. Examples include map(), filter(), and reduce().",
      },
      {
        id: 12,
        question: "What is the this keyword in JavaScript?",
        answer:
          "Answer: The this keyword refers to the object it belongs to and behaves differently depending on the context in which it is used. In a method, this refers to the object the method is a part of, in a function, this refers to the global object (or undefined in strict mode), and in an arrow function, this lexically inherits the context.",
      },
      {
        id: 13,
        question:
          "What is an arrow function, and how does it differ from a regular function?",
        answer:
          " An arrow function is a more concise way to write functions using the => syntax. It differs from a regular function in the way it handles this. Arrow functions do not have their own this; instead, they inherit this from the parent scope.",
      },
      {
        id: 14,
        question: "What is a promise in JavaScript?",
        answer:
          "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.\n" +
          "\n",
      },
      {
        id: 15,
        question: "What is async/await in JavaScript?",
        answer:
          "async and await are used to handle asynchronous code in a more readable and synchronous-looking manner. async is used to declare a function that returns a promise, and await is used to pause execution until a promise is resolved.",
      },
      {
        id: 16,
        question: "What is the event loop in JavaScript?",
        answer:
          "The event loop is a mechanism that handles asynchronous code execution in JavaScript. It continuously checks the message queue and pushes messages (callbacks) to the call stack for execution when the call stack is empty.",
      },
      {
        id: 16,
        question: "What is the event loop in JavaScript?",
        answer:
          "The event loop is a mechanism that handles asynchronous code execution in JavaScript. It continuously checks the message queue and pushes messages (callbacks) to the call stack for execution when the call stack is empty.",
      },
    ],
  },
  {
    type: "intermediate",
    questions: [
      {
        id: 1,
        question: "What are JavaScript closures used for?",
        answer:
          "Closures are commonly used for data encapsulation, creating private variables, and implementing functions that maintain state between calls.",
      },
      {
        id: 2,
        question: "What are the key differences between null and undefined?",
        answer: "Answer",
        example: `
null: Represents the intentional absence of any object value.
undefined: Indicates that a variable has been declared but has not yet been assigned a value.
        `,
      },
      {
        id: 3,
        question: "What is the difference between call(), apply(), and bind()?",
        answer: `
          call(): Calls a function with a specified this context and arguments passed individually.
          apply(): Calls a function with a specified this context and arguments passed as an array.
          bind(): Returns a new function with a specified this context and initial arguments.
        `,
      },
      {
        id: 4,
        question: "What is the event delegation pattern?",
        answer:
          " Event delegation is a technique where a single event listener is attached to a parent element rather than multiple listeners on individual child elements. The listener uses the event's target property to determine which child element triggered the event.",
      },
      {
        id: 5,
        question: "What are the differences between slice() and splice()?",
        answer: `
                  slice(): Creates a shallow copy of a portion of an array without modifying the original array. It takes two arguments: start index and end index.
                  splice(): Changes the contents of an array by removing, replacing, or adding elements. It modifies the original array.
                `,
      },
      {
        id: 6,
        question:
          "What is the difference between a function declaration and a function expression?",
        answer: `Function declaration is hoisted and can be called before its definition.
                  Function expression is not hoisted and can only be called after its definition.`,
      },
      {
        id: 7,
        question: "What is destructuring in JavaScript?",
        answer:
          "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.",
        example: `
        const person = { name: "John", age: 30 };
        const { name, age } = person;
        console.log(name); // Output: "John"
        console.log(age); // Output: 30
        `,
      },
      {
        id: 8,
        question: "What is the difference between forEach() and map()?",
        answer: `forEach(): Iterates over an array and executes a provided function for each element, but does not return anything.
          map(): Creates a new array by applying a function to each element of the original array. It returns a new array with transformed elements.`,
      },
      {
        id: 9,
        question: "What is the purpose of setTimeout() and setInterval()?",
        answer: `forEach(): Iterates over an array and executes a provided function for each element, but does not return anything.
                map(): Creates a new array by applying a function to each element of the original array.`,
      },
      {
        id: 10,
        question: "What is JSON.parse() and JSON.stringify()?",
        answer: `JSON.parse(): Converts a JSON string into a JavaScript object.
                JSON.stringify(): Converts a JavaScript object into a JSON string.`,
      },
    ],
  },
  {
    type: "advanced",
    questions: [
      {
        id: 1,
        question: "What is a JavaScript module?",
        answer:
          "A JavaScript module is a file that contains code (variables, functions, classes) that can be exported and imported by other files to maintain separation of concerns and modularity.",
      },
      {
        id: 2,
        question:
          "What is the difference between a shallow copy and a deep copy in JavaScript?",
        answer: `A shallow copy copies only the top-level properties of an object or array.
                  A deep copy recursively copies all levels of an object or array, including nested objects or arrays.`,
      },
      {
        id: 3,
        question: "What is a generator function in JavaScript?",
        answer:
          "A generator function is a function that can yield multiple values over time using the yield keyword. It returns an iterator that can be used to control the flow of function execution",
      },
      {
        id: 4,
        question: "What is the Symbol data type in JavaScript?",
        answer:
          "A Symbol is a primitive data type introduced in ES6, used to create unique identifiers for object properties. They are immutable and often used to avoid property name collisions.",
      },
      {
        id: 5,
        question: "What are Set and Map in JavaScript?",
        answer:
          "A Symbol is a primitive data type introduced in ES6, used to create unique identifiers for object properties. They are immutable and often used to avoid property name collisions.",
      },
      {
        id: 6,
        question: "What are Set and Map in JavaScript?",
        answer: `Set: A collection of unique values.
          Map: A collection of key-value pairs, where both keys and values can be of any data type.`,
      },
      {
        id: 7,
        question: "What is the Proxy object in JavaScript?",
        answer:
          "The Proxy object allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment, function invocation) on an object.",
      },
      {
        id: 8,
        question: "What is WeakMap and WeakSet?",
        answer: `eakMap: A collection of key-value pairs where keys are objects and the values can be of any data type. The keys are weakly referenced, meaning they can be garbage collected.
          WeakSet: A collection of unique objects, where objects are weakly referenced and can be garbage collected.`,
      },
      {
        id: 9,
        question: "What is currying in JavaScript?",
        answer:
          "Currying is the technique of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.",
      },
      {
        id: 10,
        question: "What is the spread operator (...) in JavaScript?",
        answer:
          "The spread operator allows expanding an array or object into individual elements or properties.",
        example: `  const arr = [1, 2, 3];
  const newArr = [...arr, 4];`,
      },
      {
        id: 11,
        question: "What is a WeakRef in JavaScript?",
        answer:
          " WeakRef allows you to hold a weak reference to an object, which does not prevent the object from being garbage collected. It is typically used for caching purposes.",
      },
    ],
  },
];
