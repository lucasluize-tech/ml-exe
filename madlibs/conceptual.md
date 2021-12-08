### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

> React is a javaScript library to build UI.

- What is Babel?

> Babel is a transpiler , that enables the usage of JSX syntax and translates to JS.

- What is JSX?

> Stands for JavaScript Syntax Extension, and enables us to write html like formatting in JS.

- How is a Component created in React?

> A component is created by: importing the react library, defining functions that returns a markup of html to render.

- What are some difference between state and props?

> State is an object that can be multable. Props is another object but it's read only, meaning that we can't modify its contents.

- What does "downward data flow" refer to in React?

> The "downward data flow" is when data from a parent component is passed to a child component by using props.

- What is a controlled component?

> controlled component is a component that renders forms and controls their data in their state.

- What is an uncontrolled component?

> a component that won't keep track of it's state.

- What is the purpose of the `key` prop when rendering a list of components?

> Purpose is to create a unique identifier when rendering a list of the same components.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

> Because a slight change on the list order can cause the app to misbehave.

- Describe useEffect. What use cases is it used for in React components?

> useEffect is a Hook that will run once after component is mounted, and it will be re-used, once a parameter ( in a list of parameters defined by us ) changes its value.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

> useRef is another hook that it will create a reference of a DOM element in the component. and it won't cause the component to re-render. Only state changes cause re-renders.

- When would you use a ref? When wouldn't you use one?

> I would use a ref when I need to change some value of a child element without modifying the props and making it persistent, but I would not use it to manipulate DOM elements.

- What is a custom hook in React? When would you want to write one?

> Custom Hook is a function that is used to clean some of the clutter inside components, that means moving the logic to another file as function.
