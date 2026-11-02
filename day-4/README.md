What Is Lifting State Up :-

Interview Definition: Lifting state up is the process of moving shared state from child components to their nearest common parent component so that multiple components can access and update the same data.

In simple language, when two or more components need the same data, we keep that data in their common parent.

why we use lifting state :-
When two components need the same data.
When multiple components need to update shared information.
When a parent needs to coordinate child components.
When you want to avoid maintaining duplicate state.


What is Event Handling in React?
Interview Definition: Event handling in React is the process of responding to user interactions such as clicks, typing, form submissions, mouse movements, and keyboard events.

In simple language, whenever a user performs an action on a website, we can execute a JavaScript function in response.

Examples:
- Clicking a button.
- Typing inside an input field.
- Submitting a form.
- Moving the mouse over an element.
- Pressing a keyboard key.

Event handling in React 

React provides event handlers through JSX attributes.
function App() {

  function handleClick() {
    alert("Welcome to React!");
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;


How to Pass Event Handler Functions:-

There are two important ways to write event handlers.

Correct approach:
function App() {

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}


Here, we pass the function reference.

The function executes when the click happens.

Incorrect approach for this example:
<button onClick={handleClick()}>
  Click
</button>


Here, handleClick() executes immediately while React renders the component, instead of waiting for the click.

Remember:

- onClick={handleClick} means pass the function.
- onClick={handleClick()} means call the function immediately during rendering.

