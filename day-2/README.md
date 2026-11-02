Props :- props are read only property which sends the data from parent to child .

it is immutable .

Advantages of Props
1. Reusability: Use one component for different data.
2. Dynamic UI: Display information based on the received values.
3. Maintainability: Update the component in one place.
4. Data communication: Pass information from parent components to child components.
5. Customization: Configure components without rewriting their implementation.

 What Is Props Destructuring 
 Props destructuring is a JavaScript technique that extracts individual properties from the props object, allowing components to access their values directly.

 <!-- or  -->
 Props destructuring is a JavaScript technique that extracts individual properties from the props object, allowing components to access their values directly.

 Example With Destructuring
function Student({ name, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
    </div>
  );
}


Passing Functions as Props
Props are not limited to data. We can also pass functions from parent components to child components.

This technique is important when a child needs to notify its parent that an event occurred.
Example 1: Passing a Function
function Child({ greet }) {
  return (
    <button onClick={greet}>
      Greet
    </button>
  );
}

function App() {
  function handleGreet() {
    alert("Hello from the parent!");
  }

  return <Child greet={handleGreet} />;
}

export default App;


What Is the children Prop:-

Interview Definition:
The children prop contains the content placed between a component's opening and closing tags.

It allows components to wrap and display arbitrary content.
Example
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default Card;

App.jsx
import Card from "./Card";

function App() {
  return (
    <div>
      <Card>
        <h2>Student Details</h2>
        <p>Name: Rahul</p>
      </Card>

      <Card>
        <h2>Course Details</h2>
        <p>Course: React.js</p>
      </Card>
    </div>
  );
}

export default App;

Now we can use name and course directly.
App.jsx
import Student from "./Student";

function App() {
  return (
    <Student
      name="Rahul"
      course="MERN Stack"
    />
  );
}

export default App;


Conditional Rendering Using Props
Props can determine which UI should be displayed.
Example: User Role
function Dashboard({ role }) {
  return (
    <div>
      <h2>Dashboard</h2>

      {role === "admin" ? (
        <p>Welcome, Administrator!</p>
      ) : (
        <p>Welcome, User!</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Dashboard role="admin" />
      <Dashboard role="user" />
    </div>
  );
}

export default App;

Output
The first dashboard displays:
Dashboard
Welcome, Administrator!

The second displays:
Dashboard
Welcome, User!













listwithout key 
with key 


task:-build a reusable component Header page Card lsit and Footer component