export const ReactQuestions = [
  {
    type: "basic",
    questions: [
      {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
      },
      {
        id: 2,
        question: "What are components in React?",
        answer: "Components are reusable building blocks of UI.",
      },
      {
        id: 3,
        question: "What is JSX?",
        answer:
          "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
      },
      {
        id: 4,
        question: "What is the difference between props and state in React?",
        answer: "Props are immutable, while state is mutable.",
      },
      {
        id: 5,
        question: "What is a stateful component?",
        answer: "A stateful component is a component that has its own state.",
      },
      {
        id: 6,
        question: "What is a stateless component?",
        answer:
          "A stateless component is a component that does not have its own state.",
      },
      {
        id: 7,
        question: "What is a controlled component?",
        answer:
          "A controlled component is a component that is controlled by the parent component.",
      },
      {
        id: 8,
        question: "What is a uncontrolled component?",
        answer:
          "An uncontrolled component is a component that is not controlled by the parent component.",
      },
      {
        id: 9,
        question: "What is a virtual DOM?",
        answer:
          "The virtual DOM is a representation of the actual DOM that is used by the React library to efficiently update the UI.",
      },
      {
        id: 10,
        question: "What is a lifecycle method?",
        answer:
          "A lifecycle method is a method that is called at different stages of the component's lifecycle.",
      },
      {
        id: 11,
        question: "What is a higher-order component?",
        answer:
          "A higher-order component is a function that takes a component as an argument and returns a new component.",
      },
      {
        id: 12,
        question: "What is a render prop?",
        answer:
          "A render prop is a prop that is a function that returns a React element.",
      },
      {
        id: 13,
        question: "What is a context API?",
        answer:
          "The context API is a way to share data across components without passing props down the component tree.",
      },
      {
        id: 14,
        question: "What is a context provider?",
        answer:
          "A context provider is a component that provides the context to its children.",
      },
      {
        id: 15,
        question: "What is a context consumer?",
        answer:
          "A context consumer is a component that consumes the context and uses the context value.",
      },
      {
        id: 16,
        question: "What is a HOC?",
        answer:
          "A HOC is a function that takes a component as an argument and returns a new component.",
      },
      {
        id: 17,
        question: "What is a memo?",
        answer:
          "A memo is a function that takes a component as an argument and returns a new component.",
      },
      {
        id: 18,
        question: "What is a ref?",
        answer: "A ref is a reference to a DOM element or a component.",
      },
      {
        id: 19,
        question: "What is a portal?",
        answer:
          "A portal is a way to render children outside of the DOM hierarchy of the parent component.",
      },
      {
        id: 20,
        question: "What is a fragment?",
        answer:
          "A fragment is a way to group multiple elements in a React component.",
      },
      {
        id: 21,
        question: "What is a key in React?",
        answer:
          "A key is a unique identifier for each element in a React component.",
      },
      {
        id: 22,
        question: "What is a ref in React?",
        answer: "A ref is a reference to a DOM element or a component.",
      },
      {
        id: 23,
        question: "What is a portal in React?",
        answer:
          "A portal is a way to render children outside of the DOM hierarchy of the parent component.",
      },
      {
        id: 24,
        question: "What is a fragment in React?",
        answer:
          "A fragment is a way to group multiple elements in a React component.",
      },
      {
        id: 25,
        question: " What is React, and how does it work?",
        answer:
          "React is a JavaScript library for building user interfaces. It works by using a virtual DOM to optimize UI updates and re-rendering.",
      },
      {
        id: 26,
        question: "What are the key features of React?",
        answer:
          "Virtual DOM, component-based architecture, one-way data binding, JSX, declarative UI.",
      },
      {
        id: 27,
        question:
          " What is the difference between React and other frameworks like Angular or Vue?",
        answer:
          " React is a library focused only on the view layer, while Angular and Vue are frameworks that include more tools and built-in features.",
      },
      {
        id: 28,
        question: "What is JSX? Why do we use it in React?",
        answer:
          "JSX (JavaScript XML) is a syntax extension that looks like HTML but can include JavaScript expressions. It simplifies the creation of React elements.",
      },
      {
        id: 29,
        question: "What is the virtual DOM?",
        answer:
          " A lightweight representation of the real DOM that React uses to improve performance by calculating updates efficiently.",
      },
      {
        id: 30,
        question:
          "What is the difference between functional and class components?",
        answer:
          "Functional components are stateless and rely on hooks for state management, while class components have built-in state and lifecycle methods.",
      },
      {
        id: 31,
        question: "What is the role of render() in React?",
        answer:
          "The render() method in class components is used to define the JSX that React should render to the DOM.",
      },
      {
        id: 32,
        question: "What is the purpose of React keys?",
        answer:
          "Keys help React identify which items in a list have changed, improving rendering performance.",
      },
      {
        id: 33,
        question: "Explain the concept of one-way data binding in React",
        answer:
          " In React, data flows from parent to child components via props, ensuring predictable data flow.",
      },
      {
        id: 34,
        question: "What is a React element?",
        answer:
          "A React element is an immutable object that represents the UI components in the virtual DOM.",
      },
      {
        id: 35,
        question: "What are props in React?",
        answer:
          "Props (short for properties) are read-only data passed from a parent component to a child component.",
      },
      {
        id: 36,
        question: "What is the difference between props and state in React?",
        answer:
          "Props are immutable and used to pass data to child components, while state is mutable and managed locally within a component.",
      },
      {
        id: 37,
        question: "How do you create a React application?",
        answer:
          "Using npx create-react-app <app-name> or a manual setup with tools like Webpack and Babel.",
      },
      {
        id: 38,
        question: "What are fragments in React?",
        answer:
          "Fragments allow grouping multiple child elements without adding extra nodes to the DOM.",
      },
      {
        id: 39,
        question: "What is the purpose of ReactDOM.render()?",
        answer: "It renders a React element into the DOM.",
      },
      {
        id: 40,
        question:
          "What is the difference between React.Component and React.PureComponent?",
        answer:
          "React.PureComponent implements shouldComponentUpdate with a shallow comparison of props and state, avoiding unnecessary re-renders.",
      },
      {
        id: 41,
        question: "What is React’s declarative approach?",
        answer:
          "React lets you describe what the UI should look like, and it handles the DOM updates automatically.",
      },
      {
        id: 42,
        question: " How does React handle events?",
        answer:
          "React uses synthetic events that work across all browsers, wrapping native events.",
      },
      {
        id: 43,
        question: "What is a higher-order component (HOC)?",
        answer:
          "A function that takes a component and returns a new component with added functionality.",
      },
      {
        id: 44,
        question: "What is the purpose of React.Children?",
        answer:
          "It provides utilities to work with children elements, such as mapping or filtering.",
      },
      {
        id: 45,
        question: "What is reconciliation in React?",
        answer:
          " React's process of determining the minimal set of changes to apply to the real DOM.",
      },
      {
        id: 46,
        question: "Can browsers read JSX directly?",
        answer:
          "No, browsers need JSX to be transpiled into regular JavaScript using tools like Babel.",
      },
      {
        id: 47,
        question:
          "What is the difference between a controlled and uncontrolled component?",
        answer:
          "Controlled components have their value managed by React state, while uncontrolled components rely on the DOM for state.",
      },
      {
        id: 48,
        question: " What is React.StrictMode?",
        answer:
          "A tool for highlighting potential problems in an application, such as deprecated APIs or side-effect errors.",
      },
      {
        id: 49,
        question: "What are portals in React?",
        answer:
          " A way to render children into a DOM node outside the parent component hierarchy.",
      },
    ],
  },
  {
    type: "intermediate",
    questions: [
      {
        id: 1,
        question: " What is a React component?",
        answer:
          "A React component is a JavaScript function or class that returns a part of the UI (typically JSX) based on input data and state.",
      },

      {
        id: 2,
        question: "How do you create a functional component in React?",
        answer:
          "You create a functional component by writing a function that returns JSX",
        Example: `function MyComponent() {
            return <div>Hello, World!</div>;
          }`,
      },

      {
        id: 3,
        question: " How do you manage state in a functional component?",
        answer:
          " You use the useState hook to manage state in a functional component.",
        Example: `const [count, setCount] = useState(0)`,
      },

      {
        id: 4,
        question: " What is the useState hook? Provide an example.",
        answer:
          "The useState hook is used to add state to functional components.",
        Example: `const [count, setCount] = useState(0);`,
      },

      {
        id: 5,
        question:
          " What is the difference between stateful and stateless components?",
        answer:
          " Stateful components manage and track state, while stateless components only receive props and render UI based on those props.",
      },

      {
        id: 6,
        question:
          "How do you pass data from a parent to a child component in React?",
        answer:
          "You pass data through props, which are read-only values that the child component receives from the parent.",
      },

      {
        id: 7,
        question: "What are default props? How do you set them?",
        answer:
          "Default props are values that are set for a component’s props in case the parent does not pass them.",
        example: `MyComponent.defaultProps ={name: 'Default Name',};`,
      },
      {
        id: 8,
        question: "What is the context API?",
        answer:
          "The context API allows you to pass data through the component tree without manually passing props to each level, avoiding prop drilling.",
      },
      {
        id: 9,
        question: " What is prop drilling, and how do you solve it?",
        answer:
          " Prop drilling occurs when you pass props through many layers of components. You can solve it using the context API or state management libraries like Redux.",
      },
      {
        id: 10,
        question: " What is lifting state up in React?",
        answer:
          "Lifting state up involves moving the state to a common parent component so that multiple child components can share the same state.",
      },
      {
        id: 11,
        question:
          " What is the difference between local state and global state in React?",
        answer:
          " Local state is specific to a component and managed within it, while global state is shared across multiple components, typically managed with tools like Redux or the context API.",
      },
      {
        id: 12,
        question: "How do you manage global state in React?",
        answer:
          " Global state can be managed using the context API or state management libraries like Redux, MobX, or Recoil.",
      },
      {
        id: 13,
        question: "What is setState, and how does it work?",
        answer:
          "setState is a method in class components that updates the component’s state and triggers a re-render of the component.",
      },
      {
        id: 14,
        question: " What is the importance of the callback in setState?",
        answer:
          "The callback in setState is executed after the state has been updated, allowing you to perform actions based on the updated state.",
      },
      {
        id: 15,
        question: "What are React refs, and how do you use them?",
        answer:
          "Refs are used to access DOM nodes directly or store mutable values.",
        example: `const inputRef = useRef();`,
      },
      {
        id: 16,
        question:
          "What is the difference between controlled and uncontrolled inputs?",
        answer:
          " Controlled inputs are bound to state, and their value is controlled by React, while uncontrolled inputs are handled by the DOM.",
      },
      {
        id: 17,
        question: "What is getDerivedStateFromProps used for?",
        answer:
          "getDerivedStateFromProps is a lifecycle method used to update state based on props before a component renders.",
      },
      {
        id: 18,
        question: " What is the purpose of shouldComponentUpdate?",
        answer:
          "shouldComponentUpdate allows you to prevent unnecessary re-renders",
      },
    ],
  },
  {
    type: "advanced",
    questions: [
      {
        id: 1,
        question: "What is a memo?",
        answer:
          "A memo is a function that takes a component as an argument and returns a new component.",
      },
      {
        id: 2,
        question: "What are React hooks?",
        answer:
          "React hooks are functions that allow you to 'hook into' React state and lifecycle features from functional components. Examples include useState, useEffect, and useContext.",
      },
      {
        id: 3,
        question: "What is the useState hook? Provide an example.",
        answer:
          " The useState hook is used to manage state in functional components.",
        example: `const [count, setCount] = useState(0);`,
      },
      {
        id: 4,
        question: "What is the useEffect hook?",
        answer:
          "The useEffect hook allows you to perform side effects in functional components, such as fetching data, updating the DOM, or subscribing to events. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.",
      },
      {
        id: 5,
        question: "What is the purpose of the useContext hook?",
        answer:
          "The useContext hook allows you to access the value of a context directly in functional components, without needing to use a Consumer component.",
      },
      {
        id: 6,
        question: "How do you manage side effects in React using useEffect?",
        answer:
          "useEffect accepts a function and an optional dependency array. The function runs after the render and can clean up when the component unmounts or when dependencies change.",
        example: `useEffect(() => {
  fetchData();
}, []);
`,
      },
      {
        id: 7,
        question: "What is the useReducer hook, and when should you use it?",
        answer:
          "useReducer is a hook for managing complex state logic in functional components. It is ideal for cases where you have multiple state variables that depend on each other or involve complex logic. It works similarly to Redux reducers.",
      },
      {
        id: 8,
        question: "What is the useCallback hook?",
        answer:
          "The useCallback hook returns a memoized version of a callback function that only changes if one of the dependencies has changed. It helps prevent unnecessary re-renders of child components.",
      },
      {
        id: 9,
        question: "What is the useMemo hook?",
        answer:
          "The useCallback hook returns a memoized version of a callback function that only changes if one of the dependencies has changed. It helps prevent unnecessary re-renders of child components.",
      },
      {
        id: 10,
        question: "What is the useRef hook?",
        answer:
          "useRef is a hook that returns a mutable object with a .current property, allowing you to persist values across renders without causing re-renders. It can also be used to directly access DOM elements.",
      },
      {
        id: 11,
        question:
          "What is the difference between useEffect and useLayoutEffect?",
        answer:
          "useEffect runs after the render is committed to the screen, while useLayoutEffect runs synchronously after the DOM has been mutated but before the browser has painted.",
      },
      {
        id: 12,
        question: "What is the useImperativeHandle hook?",
        answer:
          "useImperativeHandle allows you to customize the instance value that is exposed when using ref in functional components. It is often used in combination with forwardRef.",
      },
      {
        id: 13,
        question: "What is the useContext hook, and how is it used?",
        answer:
          "useContext is used to subscribe to the value of a context within a functional component. It allows components to access shared data without passing props down manually.",
      },
      {
        id: 14,
        question:
          "What are the benefits of using React hooks over class components?",
        answer:
          "Hooks provide a simpler and more concise way to manage state and side effects in functional components. They also eliminate the need for lifecycle methods and allow sharing stateful logic across components.",
      },
      {
        id: 15,
        question: "What are custom hooks in React?",
        answer:
          "Custom hooks are JavaScript functions that can use other hooks to share reusable logic across components. For example, a custom hook could be created to fetch data from an API.",
      },
      {
        id: 16,
        question: "How does useEffect work with dependencies?",
        answer:
          "useEffect accepts a dependency array. If any value in the array changes, the effect will run again. If the array is empty, the effect will run once when the component mounts.",
      },
      {
        id: 17,
        question: "Can you explain the cleanup function in useEffect?",
        answer:
          " The cleanup function is returned from the effect function and is run when the component unmounts or when the effect dependencies change. It’s used to clean up subscriptions, timers, or other side effects.",
      },
      {
        id: 18,
        question: "",
        answer: "",
      },
      {
        id: 19,
        question: "",
        answer: "",
      },
      {
        id: 20,
        question: "",
        answer: "",
      },
      {
        id: 21,
        question: "",
        answer: "",
      },
      {
        id: 22,
        question: "",
        answer: "",
      },
      {
        id: 23,
        question: "",
        answer: "",
      },
      {
        id: 24,
        question: "",
        answer: "",
      },
    ],
  },
];
