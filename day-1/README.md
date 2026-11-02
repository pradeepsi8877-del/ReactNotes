React:-
Definition: React is a JavaScript library used to build interactive and reusable user interfaces (UIs), especially for web applications.

<!-- or -->
React is a JavaScript library used to build interactive user interfaces using reusable components.

component :-
 A component is a reusable part of a user interface. For example, a navbar, product card, or footer can be a React component.

SPA (Single-Page Application):-
Definition: A Single-Page Application (SPA) is a web application that loads a main HTML document and updates its content dynamically as users interact with it, usually without reloading the entire page.

In a React SPA, the browser loads the application, and navigation can change the visible content without a full-page reload.

Benefits of an SPA
- Smooth navigation.
- Less need for full-page reloads.
- Interactive user experiences.
- UI components can be reused.
- Application state can be maintained during navigation.


1. Real DOM

The Real DOM is the browser's actual document structure, which represents the webpage's elements and content.

2. Virtual DOM

The Virtual DOM is a lightweight JavaScript representation of the UI that React uses to help determine what changes are required.

3. Diffing

Diffing is the process of comparing the previous and new UI representations to identify their differences.

<!-- or -->

Diffing in React:-
Diffing means comparing the previous UI representation with the new UI representation to identify what has changed.

4. Reconciliation

Reconciliation is React's process of determining how the UI should be updated when its new representation differs from the previous one.

<!-- or -->

Reconciliation:-
Reconciliation is the process React uses to compare the previous and new UI descriptions and determine what needs to change.


Vite:-
Definition: Vite is a frontend development tool that provides a development server and a build process for modern web applications, including React applications.

declarative rendering:-
Declarative rendering means describing what the UI should look like for the current data or state, while React handles the necessary DOM updates.


1. Default Export
Interview Definition:

A default export specifies the main exported value of a JavaScript module. A module can have only one default export.

<!-- example:- -->
Header.jsx
function Header() {
  return <h1>Website Header</h1>;
}

export default Header;

App.jsx
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;



2. Named Export
Interview Definition:
A named export makes a specific declaration available to other modules under its exported name.

<!-- example  -->
Components.jsx
export function Header() {
  return <h1>Header</h1>;
}

export function Footer() {
  return <h1>Footer</h1>;
}

App.jsx
import { Header, Footer } from "./Components";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

What is the difference between a normal function and a React functional component

Answer: Both are JavaScript functions. A React functional component is intended to describe UI and is rendered by React. It follows React's component and Hook rules and returns a React node.

A normal JavaScript function may perform calculations, process data, or execute other logic without representing a UI component.

