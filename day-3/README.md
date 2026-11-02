List Without Key in React:-

When we display multiple items in React using map(), React needs a unique identity for every item. If we don't provide a key, React generates a warning in the console.

Warning in console: Each child in a list should have a unique "key" prop.

List With Key in React:-

A key is a special string attribute used in React to uniquely identify elements in a list. It helps React efficiently identify which items have changed, been added, or removed during reconciliation.


Functional Component in React

A functional component is a JavaScript function that returns React elements (usually JSX) to describe the UI. It can use React Hooks to manage state, side effects, and other React features.

Syntax:
function ComponentName() {
    return (
        <h1>Hello React</h1>
    );
}

export default ComponentName;

Features of Functional Components:
- Written using JavaScript functions.
- Use Hooks for state and side effects.
- Easy to write and maintain.
- Support props.
- Commonly used in modern React applications.


Class Component in React:-

A class component is a React component defined using an ES6 JavaScript class that extends React.Component and implements a render() method to return React elements.

<!-- or  -->
A class component is created using JavaScript classes instead of functions. It uses this.state to manage state and lifecycle methods to handle component activities.

Syntax:
import React from "react";
class ComponentName extends React.Component {
    render() {
        return (
            <h1>Hello React</h1>
        );
    }
}
export default ComponentName;

<!-- Difference  -->
Functional Component	               Class Component
Created using JavaScript function	   Created using JavaScript class
Uses Hooks for state and effects	   Uses state and lifecycle methods
Uses useState()	                       Uses this.state and this.setState()
Does not use a render method	       Requires a render method
No this keyword for component state	   Uses this keyword

